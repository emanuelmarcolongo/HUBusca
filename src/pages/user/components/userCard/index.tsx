import { View } from "react-native";
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
};

export const UserCard: React.FC<UserCardProps> = ({ userData }) => {
  return (
    <UserCardContainer>
      <Avatar
        source={{
          uri: userData.avatar_url,
        }}
      />
      <View>
        <UserInfoContainer>
          <FontAwesome5 name="hashtag" color={"#000"} size={12} />
          <InfoText>{userData.id}</InfoText>
        </UserInfoContainer>

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

        <UserInfoContainer>
          <FontAwesome5 name="users" color={"#000"} size={12} />
          <InfoText>{userData.followers}</InfoText>
        </UserInfoContainer>

        <UserInfoContainer>
          <FontAwesome5 name="laptop" color={"#000"} size={12} />
          <InfoText>{userData.public_repos}</InfoText>
        </UserInfoContainer>
      </View>
    </UserCardContainer>
  );
};
