import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/fire";

const AuthContext = createContext({});

export const AuthTunnel = ({ children }) => {
  const [user, setUser] = useState({});
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const response = Object.fromEntries(
        await AsyncStorage.multiGet(["@BChatAuth:user", "@BChatAuth:token"])
      );

      const dataUser = response["@BChatAuth:user"];
      const dataToken = response["@BChatAuth:token"];

      if (dataUser && dataToken) {
        setUser(JSON.parse(dataUser));
      }
    }

    loadStorage();
  }, []);

  async function SignInRequest({ userMail, userPass }) {
    if (userMail !== "" && userPass !== "") {
      signInWithEmailAndPassword(auth, userMail, userPass)
        .then(() => {
          console.log("asdas");
          setSigned(true);
        })
        .catch((err) => {
          Alert.alert("Login failed", err.message);
        });
    }
  }

  async function SignOutRequest() {}

  return (
    <AuthContext.Provider
      value={{ signed: signed, SignInRequest, SignOutRequest }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
