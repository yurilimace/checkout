const FormatCurrency = (value: number) => {
  const formatedCurrency = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatedCurrency;
};

export { FormatCurrency };
