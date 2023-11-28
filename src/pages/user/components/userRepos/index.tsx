import { View, Text, ActivityIndicator } from "react-native";
import { fetchGitHubUserRepositories } from "../../services/githubRepositoriesService";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { GitHubUserRepositoriesResponse } from "../../../../../utils/types/githubUserRepositoriesResponse";
import RepoCard from "../repoCard";
import {
  LoadingContainer,
  Title,
  UserRepoContainer,
  NoRepositoryText,
} from "./style";
interface UserRepositoriesProps {
  username: string;
  setErrorMessage: any;
}

export default function UserRepos({
  username,
  setErrorMessage,
}: UserRepositoriesProps) {
  const [repoInfo, setRepoInfo] = useState<GitHubUserRepositoriesResponse[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    searchUserRepos();
  }, []);

  const searchUserRepos = async () => {
    try {
      setIsLoading(true);
      const userRepositoriesInfo = await fetchGitHubUserRepositories(username);
      setRepoInfo(userRepositoriesInfo);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Erro desconhecido. Por favor, tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!username) {
    return (
      <View>
        <Text>Usuário não encontrado</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color={"#000"} />
      </LoadingContainer>
    );
  }
  return (
    <UserRepoContainer>
      <Title>Repositórios: </Title>

      {repoInfo.length === 0 && (
        <NoRepositoryText>
          Usuário não tem repositórios públicos
        </NoRepositoryText>
      )}
      {repoInfo.length > 0 && (
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
      )}
    </UserRepoContainer>
  );
}
