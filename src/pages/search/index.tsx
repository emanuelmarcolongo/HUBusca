import React, { useState } from "react";
import { TouchableOpacity, View, ActivityIndicator } from "react-native";
import { GitHubUser } from "../../../utils/types/githubUserResponse";
import UserCard from "./components/userCard";
import SearchForm from "./components/searchForm";
import ErrorMessage from "./components/errorMessage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "./components/Header";

export type RootStackParamList = {
  Usuario: { userData: GitHubUser };
};

export default function SearchPage() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <Header></Header>
      <SearchForm
        setIsLoading={setIsLoading}
        setUserData={setUserData}
        setErrorMessage={setErrorMessage}
      ></SearchForm>
      {!isLoading && errorMessage && (
        <ErrorMessage errorMessage={errorMessage} />
      )}
      {isLoading && <ActivityIndicator size="large" color={"#007bff"} />}
      {!isLoading && userData && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Usuario", { userData })}
        >
          <UserCard userData={userData}></UserCard>
        </TouchableOpacity>
      )}
    </View>
  );
}
