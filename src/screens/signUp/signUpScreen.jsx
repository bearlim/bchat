import React from "react";
import { PrimaryColor } from "../../constants/color";
import {
  StyledContainer,
  StyledSafeAreaView,
  StyledText,
} from "../../global/components/components";

export default function signUpScreen() {
  return (
    <StyledSafeAreaView bgColor={PrimaryColor}>
      <StyledContainer>
        <StyledText al="center">Cadastre-se!</StyledText>
      </StyledContainer>
    </StyledSafeAreaView>
  );
}
