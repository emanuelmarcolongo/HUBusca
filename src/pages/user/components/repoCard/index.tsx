import { Text, Linking, View } from "react-native";
import {
  RepoCardContainer,
  RepoInfoContainer,
  Title,
  RepoTitleInfo,
} from "./styles";
import dateFormat from "../../../../../utils/date format";
import { FontAwesome5 } from "@expo/vector-icons";

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
      <RepoInfoContainer>
        <RepoTitleInfo>
          <FontAwesome5
            style={{ marginRight: 5 }}
            name="laptop"
            color={"#000"}
            size={12}
          />
          <Text>Repositorio</Text>
        </RepoTitleInfo>
        <Title>{name}</Title>
      </RepoInfoContainer>

      <RepoInfoContainer>
        <RepoTitleInfo>
          <FontAwesome5
            style={{ marginRight: 5 }}
            name="book"
            color={"#000"}
            size={12}
          />
          <Text>Linguagem</Text>
        </RepoTitleInfo>
        <Text>{language}</Text>
      </RepoInfoContainer>

      {description ? (
        <RepoInfoContainer>
          <RepoTitleInfo>
            <FontAwesome5
              style={{ marginRight: 5 }}
              name="paperclip"
              color={"#000"}
              size={12}
            />
            <Text>Descrição</Text>
          </RepoTitleInfo>
          <Text>{description}</Text>
        </RepoInfoContainer>
      ) : (
        ""
      )}

      <RepoInfoContainer>
        <RepoTitleInfo>
          <FontAwesome5
            style={{ marginRight: 5 }}
            name="calendar-alt"
            color={"#000"}
            size={12}
          />
          <Text>Criado em</Text>
        </RepoTitleInfo>
        <Text>{createdAt}</Text>
      </RepoInfoContainer>

      <RepoInfoContainer>
        <RepoTitleInfo>
          <FontAwesome5
            style={{ marginRight: 5 }}
            name="calendar-alt"
            color={"#000"}
            size={12}
          />
          <Text>Criado em</Text>
        </RepoTitleInfo>
        <Text>{createdAt}</Text>
      </RepoInfoContainer>
      <RepoInfoContainer>
        <RepoTitleInfo>
          <FontAwesome5
            style={{ marginRight: 5 }}
            name="clock"
            color={"#000"}
            size={12}
          />
          <Text>Ultimo push</Text>
        </RepoTitleInfo>
        <Text>{pushedAt}</Text>
      </RepoInfoContainer>
    </RepoCardContainer>
  );
}
