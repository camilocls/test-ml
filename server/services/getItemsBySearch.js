const fetch = require("node-fetch");
const { getCategoryBreadcrumb } = require("../utils/getBreadcrumb");
const { URL_API, LIMIT_ITEMS, AUTHOR } = require("../constants");

const getItemsBySearch = async (req, res) => {
  const { q } = req.query;
  const categories = [];
  let products = [];

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

  const maxCountCategory =
    categories && categories.length
      ? categories.reduce(function (accumulator, currentCategory) {
          return accumulator.count > currentCategory.count
            ? accumulator
            : currentCategory;
        })
      : null;

  const breadcrumb = await getCategoryBreadcrumb(maxCountCategory.id);

  const productsAsync = dataMELI.results.map(async (item) => {
    const currencyId = item.prices.prices[0].currency_id;

    const currencyItemMELI = await fetch(
      `${URL_API}currencies/${currencyId}`
    ).then((res) => res.json());

    return {
      id: item.id,
      title: item.title,
      price: {
        symbol: currencyItemMELI.symbol,
        currency: currencyItemMELI.id,
        amount: item.price,
        decimals: currencyItemMELI.decimal_places,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      location: item.seller_address.city.name,
    };
  });

  await Promise.all(productsAsync).then((results) => (products = results));

  const data = {
    author: AUTHOR,
    breadcrumb,
    categories: ["", ""],
    items: products,
  };

  return res.status(200).json(data);
};

module.exports = {
  getItemsBySearch,
};
