import React, { useState } from "react";
import { View, Text } from "react-native";
import { GitHubUser } from "../../../utils/types/githubUserResponse";
import { UserCard } from "./components/userCard";
import SearchForm from "./components/searchForm";
import ErrorMessage from "./components/errorMessage";

export default function SearchPage() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <View>
      <SearchForm
        setUserData={setUserData}
        setErrorMessage={setErrorMessage}
      ></SearchForm>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      {userData && <UserCard userData={userData}></UserCard>}
    </View>
  );
}
