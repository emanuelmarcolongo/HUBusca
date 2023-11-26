import { View, Text } from "react-native";
import { fetchGitHubUserRepositories } from "../../services/githubRepositoriesService";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { GitHubUserRepositoriesResponse } from "../../../../../utils/types/githubUserRepositoriesResponse";
interface UserRepositoriesProps {
  username?: string;
  setErrorMessage: any;
}

export default function UserRepos({
  username,
  setErrorMessage,
}: UserRepositoriesProps) {
  const [repoInfo, setRepoInfo] = useState<GitHubUserRepositoriesResponse[]>(
    []
  );

  if (!username) {
    return (
      <View>
        <Text>Usuário não encontrado</Text>
      </View>
    );
  }

  const searchUserRepos = async () => {
    try {
      const userRepositoriesInfo = await fetchGitHubUserRepositories(username);
      setRepoInfo(userRepositoriesInfo);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Erro desconhecido. Por favor, tente novamente.");
      }
    }
  };

  searchUserRepos();

  return (
    <View>
      <FlatList
        data={repoInfo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Text>
              <Text>Repositorio: {item?.name}</Text>
            </Text>
          );
        }}
      />
    </View>
  );
}
