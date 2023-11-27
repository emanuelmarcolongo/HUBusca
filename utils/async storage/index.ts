import AsyncStorage from "@react-native-async-storage/async-storage";
import { GitHubUser } from "../types/githubUserResponse";
export async function addSearchToHistory(userData: GitHubUser) {
  try {
    const history = await AsyncStorage.getItem("searchHistory");
    const historyArray = history ? JSON.parse(history) : [];

    const userExistsIndex = historyArray.findIndex(
      (user: GitHubUser) => user.id === userData.id
    );

    if (userExistsIndex !== -1) {
      historyArray.splice(userExistsIndex, 1);
    }

    historyArray.unshift(userData);

    const limitedHistory = historyArray.slice(0, 10);

    await AsyncStorage.setItem("searchHistory", JSON.stringify(limitedHistory));
  } catch (error) {
    console.error("Erro ao adicionar busca ao histórico:", error);
  }
}

export async function getSearchHistory(): Promise<GitHubUser[] | []> {
  try {
    const history = await AsyncStorage.getItem("searchHistory");
    if (history) return JSON.parse(history);

    return [];
  } catch (error) {
    console.error("Erro ao recuperar histórico de buscas:", error);
    return [];
  }
}

export async function clearSearchHistory() {
  try {
    await AsyncStorage.removeItem("searchHistory");
  } catch (error) {
    console.error("Erro ao limpar histórico de buscas:", error);
  }
}
