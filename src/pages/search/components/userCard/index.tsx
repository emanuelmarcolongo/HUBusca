import { View, Text } from "react-native";
import { GitHubUser } from "../../../../../utils/types/githubUserResponse";
import {
  UserCardContainer,
  Avatar,
  UserInfoContainer,
  InfoText,
} from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

type UserCardProps = {
  userData: GitHubUser;
  onPress?: () => void;
};
export default function UserCard({ userData }: UserCardProps) {
  return (
    <UserCardContainer>
      <Avatar
        source={{
          uri: userData.avatar_url,
        }}
      />
      <View>
        <UserInfoContainer>
          <FontAwesome5 name="user" color={"#000"} size={12} />
          <InfoText>{userData.name}</InfoText>
        </UserInfoContainer>

        <UserInfoContainer>
          <FontAwesome5 name="github" color={"#000"} size={12} />
          <InfoText>{userData.login}</InfoText>
        </UserInfoContainer>

        <UserInfoContainer>
          <FontAwesome5 name="map-marker" color={"#000"} size={12} />
          <InfoText>{userData.location}</InfoText>
        </UserInfoContainer>
      </View>
    </UserCardContainer>
  );
}
