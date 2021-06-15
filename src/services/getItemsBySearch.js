import { API_URL } from "../constants";

export async function getItemsBySearch(query) {
  try {
    const data = await fetch(`${API_URL}items?q=${query}`)
      .then((res) => res.json())
      .catch((error) => {
        throw new Error("Sorry!");
      });

    return data;
  } catch (error) {
    return {
      error: true,
      message: `${error} 😔`,
    };
  }
}
