export default function dateFormat(date: string) {
  const dateObject = new Date(date);
  const formatedDate = dateObject.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatedDate;
}
