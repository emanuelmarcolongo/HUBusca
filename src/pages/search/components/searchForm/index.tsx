import { Keyboard } from "react-native";
import { fetchGitHubUser } from "../../services/githubApi.service";
import { useState } from "react";
import {
  SearchButton,
  SearchButtonText,
  SearchContainer,
  StyledTextInput,
} from "./styles";
import { addSearchToHistory } from "../../../../../utils/async storage";
import { GitHubUser } from "../../../../../utils/types/githubUserResponse";

export default function SearchForm({
  setIsLoading,
  setUserData,
  setErrorMessage,
}: any) {
  const [username, setUsername] = useState("");

  async function addUserToHistory(user: GitHubUser) {
    await addSearchToHistory(user);
  }

  const searchUser = async () => {
    try {
      setIsLoading(true);
      setUserData(null);
      const user = await fetchGitHubUser(username);
      setUserData(user);
      addUserToHistory(user);
      setErrorMessage(null);
      setUsername("");
      Keyboard.dismiss();
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Erro desconhecido. Por favor, tente novamente.");
      }
      Keyboard.dismiss();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SearchContainer>
      <StyledTextInput
        placeholder="Digite o nome do usuário do GitHub"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <SearchButton onPress={searchUser} disabled={username.length === 0}>
        <SearchButtonText>Buscar</SearchButtonText>
      </SearchButton>
    </SearchContainer>
  );
}
