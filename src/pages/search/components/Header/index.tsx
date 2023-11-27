import { HeaderContainer, TextContent } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Header() {
  return (
    <HeaderContainer>
      <FontAwesome5 name="github" color={"#000"} size={70} />
      <TextContent>HUBusca</TextContent>
    </HeaderContainer>
  );
}
