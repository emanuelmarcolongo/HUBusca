import { View, Text } from "react-native";
import { GitHubUser } from "../../../../../utils/types/githubUserResponse";
import { UserCardContainer, Avatar } from "./styles";

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
        <Text>id: {userData.id}</Text>
        <Text>{userData.name}</Text>
        <Text>{userData.login}</Text>
        <Text>{userData.location}</Text>
        <View>
          <Text>Seguidores: {userData.followers}</Text>
          <Text>Repositorios públicos: {userData.public_repos}</Text>
        </View>
      </View>
    </UserCardContainer>
  );
};
