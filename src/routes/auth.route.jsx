import React from "react";
import LoginScreen from "../screens/login/loginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeLoginScreen from "../screens/homeLogin/homeLoginScreen";
// import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import { Auth } from "firebase/auth";

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeLoginScreen"
    >
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="HomeLoginScreen" component={HomeLoginScreen} />
    </AuthStack.Navigator>
  );
};

// export const signInRequestFacebook = async () => {
//   const result = await LoginManager.logInWithPermissions([
//     "public_profile",
//     "email",
//   ]);

//   if (result.isCancelled) throw "Autenticação cancelada";

//   const data = await AccessToken.getCurrentAccessToken();

//   if (!data) throw "Alguma coisa deu errado, por favor, faça um issue";

//   const facebookCredential = auth.FacebookAuthProvider.credential(
//     data.accessToken
//   );

//   return Auth().signInWithCredential(facebookCredential);
// };

export default AuthRoutes;
