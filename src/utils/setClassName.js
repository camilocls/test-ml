export const setClassName = (className) => {
  if (!className) {
    return "";
  }

  const filterValidClassName = className.filter(
    (className) =>
      typeof className === "string" || typeof className === "number"
  );

  return filterValidClassName.filter((className) => className).join(" ");
};
