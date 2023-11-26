import { Keyboard } from "react-native";
import { fetchGitHubUser } from "../../services/githubApi.service";
import { useState } from "react";
import {
  SearchButton,
  SearchButtonText,
  SearchContainer,
  StyledTextInput,
} from "./styles";

export default function SearchForm({ setUserData, setErrorMessage }: any) {
  const [username, setUsername] = useState("");

  const searchUser = async () => {
    try {
      setUserData(null);
      const user = await fetchGitHubUser(username);
      setUserData(user);
      setErrorMessage(null);
      Keyboard.dismiss();
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Erro desconhecido. Por favor, tente novamente.");
      }
    }
  };

  return (
    <SearchContainer>
      <StyledTextInput
        placeholder="Digite o nome do usuário do GitHub"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <SearchButton onPress={searchUser}>
        <SearchButtonText>Buscar</SearchButtonText>
      </SearchButton>
    </SearchContainer>
  );
}
