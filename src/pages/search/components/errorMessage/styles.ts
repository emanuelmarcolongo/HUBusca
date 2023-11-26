import styled from "styled-components";
import { View, Text } from "react-native";

export const ErrorContainer = styled(View)`
  padding: 10px;
  background-color: #ffcccc;
  border-radius: 8px;
  margin: 16px;
`;

export const ErrorMessageText = styled(Text)`
  color: #ff0000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
