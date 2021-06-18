import { getItemsBySearch } from "./getItemsBySearch";
import { MOCK_SEARCH_RESULT, MOCK_QUERY } from "./__tests__/constants";
import { API_URL } from "../constants";

describe("validate getItemsBySearch", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_SEARCH_RESULT),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test("Happy path! 🥰", async () => {
    const data = await getItemsBySearch(MOCK_QUERY);

    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}items?q=${MOCK_QUERY}`);

    expect(data).toStrictEqual(MOCK_SEARCH_RESULT);
  });
  
  test("getItemsBySearch rejected 😌", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.reject(MOCK_SEARCH_RESULT),
      })
    );

    const data = await getItemsBySearch(MOCK_QUERY);

    expect(data).toStrictEqual({
      error: true,
      message: "Error: Sorry! 😔"
    });
  });
});