const allForms = require('../../getAllForms');

const getList = async () => {
  const allContacts = await allForms();
  console.log(allContacts);
  return allContacts;
};

class ContactsRepository {
  async findAll() {
    return new Promise((resolve) => {
      resolve(getList());
    });
  }
}

module.exports = new ContactsRepository();