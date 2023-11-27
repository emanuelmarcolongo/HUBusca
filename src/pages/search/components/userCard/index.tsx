import { View, Text } from "react-native";
import { GitHubUser } from "../../../../../utils/types/githubUserResponse";
import { UserCardContainer, Avatar } from "./styles";

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
        <Text>{userData.name}</Text>
        <Text>{userData.login}</Text>
        <Text>{userData.location}</Text>
      </View>
    </UserCardContainer>
  );
}
