import { getPriceFormat } from "./getPriceFormat";

describe("validate getPriceFormat", () => {
  test("Format price! 🤑", () => {
    const currencyFormat = getPriceFormat("COP", 123456);

    expect(currencyFormat).toBe("123,456")
  });
  
  test("Empty currency!", () => {
    const currencyFormat = getPriceFormat();

    expect(currencyFormat).toBe("")
  });
});