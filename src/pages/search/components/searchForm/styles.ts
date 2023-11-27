import styled from "styled-components";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

export const SearchContainer = styled(View)`
  margin: 16px;
`;

export const StyledTextInput = styled(TextInput)`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
`;

export const SearchButton = styled(TouchableOpacity)`
  background-color: ${(props) => (props.disabled ? "#CCCCCC" : "#007bff")};

  padding: 10px;
  border-radius: 8px;
  align-items: center;
`;

export const SearchButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;
