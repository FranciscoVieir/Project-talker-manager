const { readFile } = require('fs').promises;
const path = require('path');

const allContacts = path.resolve(__dirname, '.', 'talker.json');

const getAllForms = async () => {
  const response = await readFile(allContacts, 'utf8');
  const contacts = JSON.parse(response);
  // console.log(contacts);
  return contacts;
};

module.exports = getAllForms;