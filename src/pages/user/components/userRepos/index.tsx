import { View, Text } from "react-native";
import { fetchGitHubUserRepositories } from "../../services/githubRepositoriesService";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { GitHubUserRepositoriesResponse } from "../../../../../utils/types/githubUserRepositoriesResponse";
import RepoCard from "../repoCard";
import { Title, UserRepoContainer } from "./style";
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
    <UserRepoContainer>
      <Title>Repositórios: </Title>
      <FlatList
        data={repoInfo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <RepoCard
              html_url={item.html_url}
              name={item.name}
              language={item.language}
              description={item.description}
              created_at={item.created_at}
              pushed_at={item.pushed_at}
            ></RepoCard>
          );
        }}
      />
    </UserRepoContainer>
  );
}
