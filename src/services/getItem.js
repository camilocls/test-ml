import { API_URL } from "../constants";

export async function getItem(id) {
  try {
    const data = await fetch(`${API_URL}items/${id}`)
      .then((res) => res.json())
      .catch(() => {
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
