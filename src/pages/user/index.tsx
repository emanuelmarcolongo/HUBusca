import React, { useState } from "react";
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { GitHubUser } from "../../../utils/types/githubUserResponse";
import { UserPageContainer } from "./styles";
import { UserCard } from "./components/userCard";
import UserRepos from "./components/userRepos";
import ErrorMessage from "../search/components/errorMessage";

interface RouteParams {
  userData?: GitHubUser;
}

export default function UserPage() {
  const route = useRoute();
  const [errorMessage, setErrorMessage] = useState("");
  const { userData } = route.params as RouteParams;

  if (!userData) {
    return (
      <UserPageContainer>
        <Text>Usuário não encontrado</Text>
      </UserPageContainer>
    );
  }

  return (
    <UserPageContainer>
      <UserCard userData={userData}></UserCard>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      <UserRepos
        setErrorMessage={setErrorMessage}
        username={userData.login}
      ></UserRepos>
    </UserPageContainer>
  );
}
