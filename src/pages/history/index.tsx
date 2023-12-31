import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import {
  clearSearchHistory,
  getSearchHistory,
} from "../../../utils/async storage";
import UserCard from "../search/components/userCard";
import { GitHubUser } from "../../../utils/types/githubUserResponse";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { ClearButton, ClearButtonText, HistoryContainer } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Usuario: { userData: GitHubUser };
};

export default function HistoryPage() {
  const [history, setHistory] = useState<GitHubUser[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useFocusEffect(
    React.useCallback(() => {
      getHistory();
    }, [clearHistory])
  );

  async function getHistory() {
    const searchHistory = await getSearchHistory();
    setHistory(searchHistory);
  }

  async function clearHistory() {
    await clearSearchHistory();
  }

  return (
    <HistoryContainer>
      <ClearButton onPress={clearHistory} disabled={history.length <= 0}>
        <ClearButtonText>Limpar Historico</ClearButtonText>
      </ClearButton>

      <FlatList
        data={history}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Usuario", { userData: item })}
            >
              <UserCard userData={item}></UserCard>
            </TouchableOpacity>
          );
        }}
      />
    </HistoryContainer>
  );
}
