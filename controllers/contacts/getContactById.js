const { HttpError, ctrlWrapper } = require("../../helpers");
const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId, "-createdAt -updatedAt");

  if (!result) {
    throw HttpError(404, "Not found.");
  }

  res.json(result);
};

module.exports = ctrlWrapper(getContactById);
