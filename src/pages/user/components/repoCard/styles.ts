import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const RepoCardContainer = styled(TouchableOpacity)`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin: 7px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

export const RepoInfoContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RepoTitleInfo = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const DescriptionText = styled(Text)`
  margin-top: 5px;
  margin-bottom: 5px;
  max-width: 65%;
  text-align: justify;
`;
