import { setClassName } from "./setClassName";

describe("validate setClassName", () => {
  test("Get classes!", () => {
    let two = "TWO";
    let classes = setClassName(["one", two]);
    expect(classes).toBe("one TWO");

    two = {a:1};
    classes = setClassName(["one", two]);
    expect(classes).toBe("one");
    
    two = 1234;
    classes = setClassName(["one", two]);
    expect(classes).toBe("one 1234");
    
    classes = setClassName([]);
    expect(classes).toBe("");
    
    classes = setClassName();
    expect(classes).toBe("");
  });
});
