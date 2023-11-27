import { View, Text } from "react-native";
import styled from "styled-components";

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserRepoContainer = styled(View)`
  margin-bottom: 90px;
  margin-top: 40px;
`;

export const LoadingContainer = styled(View)`
  margin-top: 50px;
`;

export const NoRepositoryText = styled(Text)`
  text-align: center;
  font-size: 16px;
`;
