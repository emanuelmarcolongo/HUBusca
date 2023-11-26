import axios, { AxiosError } from "axios";
import { GitHubUser } from "../../../../utils/types/githubUserResponse";

export const fetchGitHubUser = async (
  username: string
): Promise<GitHubUser> => {
  try {
    const response = await axios.get<GitHubUser>(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error as AxiosError<GitHubUser>);
  }
};

const handleApiError = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<GitHubUser>;
    if (axiosError.response?.status === 404) {
      return new Error("Usuário não encontrado.");
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
