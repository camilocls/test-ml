const fetch = require("node-fetch");
const { URL_API } = require("../constants");

const getCategoryBreadcrumb = async (categoryId) => {
  if(!categoryId) {
    return ""
  }

  const category = await fetch(`${URL_API}categories/${categoryId}`).then(
    (res) => res.json()
  );

  const { path_from_root } = category;

  return path_from_root.map((item) => item.name).join(" / ");
};

module.exports = { getCategoryBreadcrumb };
