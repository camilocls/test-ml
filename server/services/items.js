const fetch = require("node-fetch");
const { URL_API, LIMIT_ITEMS, AUTHOR } = require("../constants");

const getRoot = (req, res) => {
  res.send("All good! 🌚");
};

const getItemsBySearch = async (req, res) => {
  const { q } = req.query;
  const categories = [];

  const dataMELI = await fetch(
    `${URL_API}sites/MLA/search?q=${q}&limit=${LIMIT_ITEMS}`
  ).then((res) => res.json());

  dataMELI.results.forEach((item) => {
    const category = categories.find(
      (category) => category.id === item.category_id
    );

    if (category) {
      category.count = category.count + 1;
    } else {
      categories.push({ id: item.category_id, count: 1 });
    }
  });

  const maxCountCategory = categories && categories.length ? categories.reduce(function (
    accumulator,
    currentCategory
  ) {
    return accumulator.count > currentCategory.count
      ? accumulator
      : currentCategory;
  }) : null;

  const categoryData = maxCountCategory ? await fetch(
    `${URL_API}categories/${maxCountCategory.id}`
  ).then((res) => res.json()) : null;

  const breadcrumb = categoryData ? categoryData.path_from_root
  .map((item) => item.name)
  .join(" / ") : "";

  const products = dataMELI.results.map(item => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail,
      free_shipping: item.shipping.free_shipping,
      location: item.seller_address.city.name
    }
  })

  const data = {
    author: AUTHOR,
    breadcrumb,
    categories: ["", ""],
    items: products,
  };

  return res.status(200).json(data);
};

const getItem = async (req, res) => {
  const { id } = req.params;

  const itemMELI = await fetch(`${URL_API}/items/${id}`).then((res) =>
    res.json()
  );

  const itemDescriptionMELI = await fetch(
    `${URL_API}/items/${id}/description`
  ).then((res) => res.json());

  const currencyMELI = await fetch(
    `${URL_API}currencies/${itemMELI.currency_id}`
  ).then((res) => res.json());

  const pictureMELI = await fetch(
    `${URL_API}pictures/${itemMELI.thumbnail_id}`
  ).then((res) => res.json());

  const image = pictureMELI.variations.find(
    (image) => image.size === "400x400"
  );

  const item = {
    author: AUTHOR,
    item: {
      id: itemMELI.id,
      title: itemMELI.title,
      price: {
        currency: itemMELI.currency_id,
        amount: itemMELI.price,
        decimals: currencyMELI.decimals_places,
      },
      picture: image.url,
      condition: itemMELI.condition,
      free_shipping: itemMELI.shipping.free_shipping,
      sold_quantity: itemMELI.sold_quantity,
      description: itemDescriptionMELI.plain_text,
    },
  };

  return res.status(200).json(item);
};

module.exports = {
  getRoot,
  getItemsBySearch,
  getItem,
};
