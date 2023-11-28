import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
export const HistoryContainer = styled(View)`
  margin-bottom: 120px;
`;
export const ClearButton = styled(TouchableOpacity)`
  background-color: ${(props) => (props.disabled ? "#CCCCCC" : "#007bff")};
  padding: 10px;
  margin: 16px;
  border-radius: 8px;
  align-items: center;
`;

export const ClearButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;
