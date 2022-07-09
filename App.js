import { StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthTunnel } from "./src/contexts/auth";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthTunnel>
        <StatusBar backgroundColor={"transparent"} translucent={true} />
        <Routes />
      </AuthTunnel>
    </NavigationContainer>
  );
}
