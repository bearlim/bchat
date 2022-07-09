import React, { useState, useContext } from "react";
import {
  LoginContainer,
  TitleText,
  ContainerHeader,
} from "./components/components";
import AuthContext from "../../contexts/auth";
import {
  StyledText,
  StyledTextInputRN,
} from "../../global/components/components";
import { Stack, VStack } from "@react-native-material/core";
import {
  StyledButton,
  StyleTouchable,
} from "../../global/components/components";
import { TerciaryColor } from "../../constants/color";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { SignInRequest, SignOutRequest } = useContext(AuthContext);

  const onSubmit = () => {
    SignInRequest();
  };

  return (
    <LoginContainer>
      <ContainerHeader>
        <TitleText>bChat</TitleText>
        <StyledText sz={15}>Entre nessa conexão</StyledText>
        <Stack mt={75}>
          <StyledText wt={800} sz={30}>
            Login
          </StyledText>

          <Stack fill mt={30}>
            <VStack
              spacing={15}
              divider={true}
              dividerStyle={{ backgroundColor: "transparent" }}
            >
              <StyledTextInputRN placeHolder="Email" func={setEmail} />
              <StyledTextInputRN placeHolder="Senha" func={setPass} />
              <StyledButton text="Entrar!" />
            </VStack>
            <Stack center top={165}>
              <StyleTouchable>
                <StyledText mt="16">Cadastrar-se</StyledText>
              </StyleTouchable>
              <StyleTouchable>
                <StyledText mt="16">Esqueceu a senha?</StyledText>
              </StyleTouchable>
            </Stack>
          </Stack>
        </Stack>
      </ContainerHeader>
    </LoginContainer>
  );
};

export default LoginScreen;
