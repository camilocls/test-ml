import { getItem } from "./getItem";
import { MOCK_RESULT_ITEM, MOCK_ID } from "./__tests__/constants";
import { API_URL } from "../constants";

describe("validate getItem", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_RESULT_ITEM),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test("Happy path! 🥰", async () => {
    const data = await getItem(MOCK_ID);

    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}items/${MOCK_ID}`);

    expect(data).toStrictEqual(MOCK_RESULT_ITEM);
  });
  
  test("getItem rejected 😌", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.reject(MOCK_RESULT_ITEM),
      })
    );

    const data = await getItem(MOCK_ID);

    expect(data).toStrictEqual({
      error: true,
      message: "Error: Sorry! 😔"
    });
  });
});