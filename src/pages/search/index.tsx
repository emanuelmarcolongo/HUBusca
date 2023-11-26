import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { GitHubUser } from "../../../utils/types/githubUserResponse";
import { fetchGitHubUser } from "./services/githubApi.service";

export default function SearchPage() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    <View>
      <TextInput
        placeholder="Digite o nome do usuário do GitHub"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TouchableOpacity onPress={searchUser}>
        <Text>Buscar</Text>
      </TouchableOpacity>
      {errorMessage && (
        <View>
          <Text>{errorMessage}</Text>
        </View>
      )}
      {userData && (
        <View>
          <Image
            width={100}
            height={100}
            borderRadius={50}
            source={{
              uri: userData.avatar_url,
            }}
          />
          <View>
            <Text>Nome: {userData.name}</Text>
            <Text>Login: {userData.login}</Text>
            <Text>Localização: {userData.location}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
