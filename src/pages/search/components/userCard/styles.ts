import styled from "styled-components";
import { View, Image } from "react-native";

export const UserCardContainer = styled(View)`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 15px;
`;
