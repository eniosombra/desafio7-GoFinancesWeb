const formatDate = (value: Date): string => {
  const formatter = new Intl.DateTimeFormat('pt-BR');

  const dateFormatted = formatter.format(new Date(value));

  return dateFormatted;
};

export default formatDate;
