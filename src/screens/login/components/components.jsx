import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Text } from "react-native";
import {
  PrimaryColor,
  GradientColor,
  TextColor,
} from "../../../constants/color";

export const LoginContainer = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${PrimaryColor};
`;

export const ContainerHeader = styled.View`
  align-self: flex-start;
  justify-content: flex-start;
  top: 75px;
`;

export const TitleAppDeprecated = ({ style }) => {
  return (
    <MaskedView
      maskElement={
        <Text
          style={[
            {
              backgroundColor: "transparent",
              fontSize: 55,
              fontWeight: "700",
            },
            style,
          ]}
        >
          BChat
        </Text>
      }
    >
      <LinearGradient
        colors={[PrimaryColor, GradientColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={[{ opacity: 0, fontSize: 55, fontWeight: "700" }, style]}>
          BChat
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export const TitleText = styled.Text`
  color: ${TextColor};
  font-size: 45px;
  font-weight: 700;
`;
export const SubTitle = styled.Text`
  color: ${TextColor};
  font-size: 30px;
`;
