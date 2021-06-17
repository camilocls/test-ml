const fetch = require("node-fetch");
const { validateStatus } = require("../utils/validateStatus");
const { getCategoryBreadcrumb } = require("../utils/getBreadcrumb");
const { URL_API, AUTHOR } = require("../constants");
const { IMAGE_PRODUCT_LARGE } = require("./constants");

const getItem = async (req, res) => {
  const { id } = req.params;
  let itemMELI = {}

  try {
    itemMELI = await fetch(`${URL_API}/items/${id}`)
      .then(validateStatus)
      .then((res) => res.json())
  } catch {
    return res.status(404).send("Not found 🏂");
  }

  const breadcrumb = await getCategoryBreadcrumb(itemMELI.category_id);

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
    (image) => image.size === IMAGE_PRODUCT_LARGE
  );

  const item = {
    author: AUTHOR,
    breadcrumb,
    item: {
      id: itemMELI.id,
      title: itemMELI.title,
      price: {
        currency: itemMELI.currency_id,
        amount: itemMELI.price,
        decimals: currencyMELI.decimal_places,
        symbol: currencyMELI.symbol,
      },
      picture: image.url,
      condition: itemMELI.condition,
      free_shipping: itemMELI.shipping.free_shipping,
      sold_quantity: itemMELI.sold_quantity,
      description: itemDescriptionMELI.text || itemDescriptionMELI.plain_text,
    },
  };

  return res.status(200).json(item);
};

module.exports = {
  getItem,
};
