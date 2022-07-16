import styled from "styled-components";
import { TextInput as TI } from "@react-native-material/core";
import {
  TextInput,
  Dimensions,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import {
  PrimaryColor,
  SecondaryColor,
  TerciaryColor,
  TextColor,
} from "../../constants/color";
import { Children, useState } from "react";

export const StyledText = styled.Text`
  color: ${(props) => (!!props.color ? props.color : TextColor)};
  font-size: ${(props) => (!!props.sz ? props.sz : 20)}px;
  font-weight: ${(props) => (!!props.wt ? props.wt : 400)};
  opacity: ${(props) => (!!props.op ? props.op : 1)};
  margin-bottom: ${(props) => (!!props.mb ? props.mb : 0)}px;
  margin-top: ${(props) => (!!props.mt ? props.mt : 0)}px;
  align-self: ${(props) => (!!props.al ? props.al : "flex-start")};
`;

export const StyledTextInput = ({ bgColor, label }) => {
  return (
    <TI
      label={label}
      inputContainerStyle={{
        backgroundColor: bgColor,
        width: Dimensions.get("screen").width * 0.93,
      }}
      style={{ borderRadius: 1000 }}
    />
  );
};

export const StyledTextInputRN = ({ placeHolder, func, t }) => {
  const [InputColor, setInputColor] = useState(PrimaryColor);
  const [Opacity, setOpacity] = useState(0.5);

  return (
    <TextInput
      placeholder={placeHolder}
      style={{
        height: 50,
        width: Dimensions.get("screen").width * 0.91,
        borderRadius: 15,
        color: TextColor,
        opacity: Opacity,
        padding: 15,
        backgroundColor: InputColor,
        top: !!t ? t : 0,
      }}
      placeholderTextColor="white"
      onFocus={() => {
        setInputColor(SecondaryColor);
        setOpacity(1);
      }}
      onBlur={() => {
        setInputColor(PrimaryColor);
        setOpacity(0.5);
      }}
      onChangeText={func}
    />
  );
};

export const StyledButton = ({ text, action }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        action;
      }}
    >
      <View
        style={{
          backgroundColor: TerciaryColor,
          alignItems: "center",
          height: 60,
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 17 }}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const StyleTouchable = ({ children }) => {
  return <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>;
};

export const StyledContainer = styled.SafeAreaView`
  flex: ${(props) => (!!props.f ? props.f : 1)};
  background-color: ${(props) =>
    !!props.bgColor ? props.bgColor : "transparent"};
  flex-direction: ${(props) => (!!props.fd ? props.fd : "column")};
  justify-content: ${(props) => (!!props.jc ? props.jc : "flex-start")};
  margin-bottom: ${(props) => (!!props.mb ? props.mb : 0)};
`;
