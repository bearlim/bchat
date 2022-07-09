import React from "react";
import styled from "styled-components";
import { Dimensions, Text } from "react-native";
import { Chip } from "@react-native-material/core";

export const StyledImage = styled.Image`
  height: ${Dimensions.get("window").height + 90}px;
  width: ${Dimensions.get("window").width}px;
  position: absolute;
`;

export const ContainerFooter = styled.View`
  flex: 1;
  flex-direction: column-reverse;
  align-items: center;
  margin-bottom: 65px;
`;

export const StyledText = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: white;
`;

export const StyledTextLower = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

export const StyledChip = ({ navigation }) => {
  return (
    <Chip
      label="COMEÇAR"
      color="#fff"
      style={{
        height: 40,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
      }}
      labelStyle={{ fontSize: 15, fontWeight: "700", color: "#18181A" }}
      onPress={() => {
        navigation.navigate("LoginScreen");
      }}
    />
  );
};
