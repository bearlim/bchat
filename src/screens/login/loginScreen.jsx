import React, { useState, useContext } from "react";
import {
  LoginContainer,
  TitleText,
  FacebookButton,
  GmailButton,
} from "./components/components";
import AuthContext from "../../contexts/auth";
import {
  StyledContainer,
  StyledText,
  StyledTextInputRN,
  StyledSafeAreaView,
} from "../../global/components/components";
import { Stack, VStack } from "@react-native-material/core";
import {
  StyledButton,
  StyleTouchable,
} from "../../global/components/components";
import { PrimaryColor, TerciaryColor } from "../../constants/color";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { SignInRequest, SignOutRequest } = useContext(AuthContext);

  const onSubmit = () => {
    console.log("teste");
  };

  return (
    <StyledSafeAreaView bgColor={PrimaryColor}>
      <LoginContainer>
        <TitleText>bChat</TitleText>
        <StyledText sz={15}>Entre nessa conexão</StyledText>

        <StyledContainer fill mt={45}>
          <StyledText wt={800} sz={30}>
            Login
          </StyledText>

          <StyledContainer mt={35} fill={0.6}>
            <VStack
              spacing={25}
              divider={true}
              dividerStyle={{ backgroundColor: "transparent" }}
            >
              <StyledTextInputRN placeHolder="Email" func={setEmail} />
              <StyledTextInputRN placeHolder="Senha" func={setPass} />
              <StyledButton text="Entrar!" />

              <StyledText al="center" wt={600} sz={15} color="#ffffff89">
                OU
              </StyledText>
            </VStack>
            <StyledContainer fd="row" mt={25} jc="space-around">
              <FacebookButton />
              <GmailButton />
            </StyledContainer>
            <StyledContainer>
              <StyledText sz={15} al="center" mt={15}>
                Ainda não tem login?{" "}
                <StyleTouchable onPress={onSubmit}>
                  <StyledText sz={16} wt={600} color={TerciaryColor}>
                    CADASTRE-SE
                  </StyledText>
                </StyleTouchable>
              </StyledText>
            </StyledContainer>
          </StyledContainer>
        </StyledContainer>
      </LoginContainer>
    </StyledSafeAreaView>
  );
};

export default LoginScreen;
