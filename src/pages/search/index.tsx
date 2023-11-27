import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { GitHubUser } from "../../../utils/types/githubUserResponse";
import UserCard from "./components/userCard";
import SearchForm from "./components/searchForm";
import ErrorMessage from "./components/errorMessage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Usuario: { userData: GitHubUser };
};

export default function SearchPage() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <SearchForm
        setUserData={setUserData}
        setErrorMessage={setErrorMessage}
      ></SearchForm>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      {userData && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Usuario", { userData })}
        >
          <UserCard userData={userData}></UserCard>
        </TouchableOpacity>
      )}
    </View>
  );
}
