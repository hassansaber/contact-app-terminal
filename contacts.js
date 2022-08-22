const fs = require("fs");
const chalk = require("chalk");
//--------------------------------------------------------

//add new contact
const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();

  //check same contact
  const duplicateContact = contacts.find(
    (contact) => contact.fullname === fullname
  );

  if (!duplicateContact) {
    //add contact to json
    contacts.push({ fullname, email, phone });
    console.log(chalk.green("contact saved"));
  } else {
    console.log(chalk.red("contact already exist"));
  }
};

//receive contacts list
const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contacts/contacts.json");
    const contacts = JSON.parse(dataBuffer.toString());
    return contacts;
  } catch (err) {
    console.log(err);
    return [];
  }
};

//DRY method
// JS automatic type correction

module.exports = {
  addContact,
};
