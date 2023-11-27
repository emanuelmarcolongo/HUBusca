import { Text, Linking } from "react-native";
import { RepoCardContainer, Title } from "./styles";
import dateFormat from "../../../../../utils/date format";

type RepoCardProps = {
  name: string;
  language: string;
  description: string | null;
  created_at: string;
  pushed_at: string;
  html_url: string;
};

export default function RepoCard({
  name,
  language,
  description,
  created_at,
  pushed_at,
  html_url,
}: RepoCardProps) {
  const createdAt = dateFormat(created_at);
  const pushedAt = dateFormat(pushed_at);

  function githubRedirect() {
    Linking.openURL(html_url).catch((err) =>
      console.error("Erro ao abrir a URL:", err)
    );
  }

  return (
    <RepoCardContainer onPress={githubRedirect}>
      <Title>{name}</Title>
      <Text>{language}</Text>
      <Text>{description}</Text>
      <Text>criado em: {createdAt}</Text>
      <Text>ultimo push: {pushedAt}</Text>
    </RepoCardContainer>
  );
}
