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
    SignInRequest();
  };

  return (
    <StyledContainer bgColor={PrimaryColor}>
      <LoginContainer>
        <TitleText>bChat</TitleText>
        <StyledText sz={15}>Entre nessa conexão</StyledText>

        <Stack fill mt={75}>
          <StyledText wt={800} sz={30}>
            Login
          </StyledText>

          <Stack mt={55} fill={0.6}>
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
          </Stack>
          {/* Redes sociais */}
          <Stack fill={0.3}>
            <StyledContainer f={0.68} jc="space-around" fd="row">
              <FacebookButton />
              <GmailButton />
            </StyledContainer>

            <StyledText sz={15} al="center" mt={25}>
              Ainda não tem login?{" "}
              <StyleTouchable>
                <StyledText sz={16} wt={600} color={TerciaryColor}>
                  CADASTRE-SE
                </StyledText>
              </StyleTouchable>
            </StyledText>
          </Stack>
        </Stack>
      </LoginContainer>
    </StyledContainer>
  );
};

export default LoginScreen;
