import axios, { AxiosError } from "axios";
import { GitHubUserRepositoriesResponse } from "../../../../utils/types/githubUserRepositoriesResponse";

export async function fetchGitHubUserRepositories(
  username: string
): Promise<GitHubUserRepositoriesResponse[]> {
  try {
    const response = await axios.get<GitHubUserRepositoriesResponse[]>(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error as AxiosError<GitHubUserRepositoriesResponse[]>);
  }
}

const handleApiError = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<GitHubUserRepositoriesResponse[]>;
    if (axiosError.response?.status === 404) {
      return new Error("Repositórios do usuário não encontrado.");
    } else if (axiosError.response?.status === 500) {
      return new Error(
        "Erro interno do servidor. Por favor, tente novamente mais tarde."
      );
    } else {
      return new Error("Erro desconhecido. Por favor, tente novamente.");
    }
  } else {
    return new Error("Erro na requisição. Por favor, tente novamente.");
  }
};
