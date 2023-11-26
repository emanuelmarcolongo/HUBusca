import { ErrorContainer, ErrorMessageText } from "./styles";

type ErrorMessageProps = {
  errorMessage: string;
};

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return (
    <ErrorContainer>
      <ErrorMessageText>{errorMessage}</ErrorMessageText>
    </ErrorContainer>
  );
}
