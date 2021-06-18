import { renderHook } from "@testing-library/react-hooks";
import { usePageTitle } from "./usePageTitle";

const mockTitle = "Hi title!";

test("Validate usePageTitle", async () => {
  const { result } = renderHook(() => usePageTitle(mockTitle));

  expect(result.current.title).toBe(mockTitle);
});
