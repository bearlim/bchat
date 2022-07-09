import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  StyledImage,
  ContainerFooter,
  StyledText,
  StyledTextLower,
  StyledChip,
} from "./components/components";
import { FAB, Stack, Chip } from "@react-native-material/core";

const HomeLoginScreen = ({ navigation }) => {
  return (
    <Stack fill>
      <StyledImage source={require("../../assets/images/pic.png")} />
      <ContainerFooter>
        <TouchableOpacity
          style={{ bottom: 20 }}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <StyledChip navigation={navigation} />
        </TouchableOpacity>
        <StyledTextLower>Venha conferir </StyledTextLower>
        <StyledTextLower>Rapido, simples e compacto </StyledTextLower>
        <StyledTextLower>Uma nova maneira de se comunicar </StyledTextLower>
        <StyledText>bChat</StyledText>
      </ContainerFooter>
    </Stack>
  );
};

export default HomeLoginScreen;
