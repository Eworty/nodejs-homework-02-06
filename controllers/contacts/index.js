const getAll = require("./getAllContacts");
const getById = require("./getByIdContact");
const add = require("./addContact");
const deleteById = require("./deleteByIdContact");
const updateById = require("./updateByIdContact");
const updateFavorite = require("./updateFavoriteConact");

module.exports = {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorite,
};
