import React from "react";
import LoginScreen from "../screens/login/loginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeLoginScreen from "../screens/homeLogin/homeLoginScreen";

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

export default AuthRoutes;
