import { renderHook } from "@testing-library/react-hooks";
import { useDataSearch } from "./useDataSearch";
import { MOCK_SEARCH_RESULT, MOCK_QUERY } from "../services/mocks/constants"

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

test("Validate data from useDataSearch", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useDataSearch(MOCK_QUERY));

  expect(result.current.isFetching).toBe(true);

  expect(result.current.isError).toBeFalsy();

  await waitForNextUpdate();

  expect(result.current).toStrictEqual({
    breadcrumb: MOCK_SEARCH_RESULT.breadcrumb,
    isFetching: false,
    items: MOCK_SEARCH_RESULT.items,
  });
});
