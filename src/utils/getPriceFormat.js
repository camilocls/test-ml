export const getPriceFormat = (currency, amount) => {
  const styleCurrency = "currency";

  if (!currency || !amount) {
    return "";
  }

  return new Intl.NumberFormat({
    style: styleCurrency,
    currency: currency,
  }).format(amount);
};
