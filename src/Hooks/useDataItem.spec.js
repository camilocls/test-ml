import { renderHook } from "@testing-library/react-hooks";
import { useDataItem } from "./useDataItem";
import { MOCK_RESULT_ITEM, MOCK_ID } from "../services/__tests__/constants"

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

test("Validate data from useDataItem", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useDataItem(MOCK_ID));

  expect(result.current.isFetching).toBe(true);

  expect(result.current.isError).toBeFalsy();

  await waitForNextUpdate();

  expect(result.current).toStrictEqual({
    id: MOCK_ID,
    breadcrumb: MOCK_RESULT_ITEM.breadcrumb,
    isFetching: false,
    title: MOCK_RESULT_ITEM.item.title,
    description: MOCK_RESULT_ITEM.item.description,
    picture: MOCK_RESULT_ITEM.item.picture,
    freeShipping: MOCK_RESULT_ITEM.item.free_shipping,
    soldQuantity: MOCK_RESULT_ITEM.item.sold_quantity,
    condition: MOCK_RESULT_ITEM.item.condition,
    price: MOCK_RESULT_ITEM.item.price,
  });
});
