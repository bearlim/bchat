import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import {
  PrimaryColor,
  GradientColor,
  TextColor,
} from "../../../constants/color";

export const LoginContainer = styled.View`
  flex: 1;
  padding: 15px;
  top: 30px;
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

export const FacebookButton = () => {
  return (
    <View
      style={{
        backgroundColor: "#3b5998",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        maxWidth: 150,
        maxHeight: 59,
      }}
    >
      <Image
        source={require("../../../imgs/icons/facebook.png")}
        style={{ width: 25, height: 25 }}
      />
    </View>
  );
};

export const GmailButton = () => {
  return (
    <View
      style={{
        backgroundColor: "#e4e6eb",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        maxWidth: 150,
        maxHeight: 59,
      }}
    >
      <TouchableWithoutFeedback>
        <Image
          source={require("../../../imgs/icons/google.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
