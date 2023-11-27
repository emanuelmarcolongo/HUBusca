import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
export const HistoryContainer = styled(View)`
  margin: 16px;
`;
export const ClearButton = styled(TouchableOpacity)`
  background-color: #007bff;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`;

export const ClearButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;
