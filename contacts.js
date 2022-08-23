
const fs = require("fs");
const chalk = require("chalk");
//--------------------------------------------------------

//add new contact
const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();

  //check same contact
  const duplicateContact = contacts.find(
    (contact) =>
      contact.fullname === fullname ||
      contact.phone === phone ||
      contact.email === email
  );

  //set id for contacts
  // let id = 1
  // contacts.
  //   id += 1




  if (!duplicateContact) {
    //add contact to json
    contacts.push({ fullname, phone, email });
    saveContacts(contacts);
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

//save to json
const saveContacts = (contacts) => {
  const stringContacts = JSON.stringify(contacts);
  fs.writeFileSync("contacts/contacts.json", stringContacts);
};

//DRY method
// JS automatic type correction

module.exports = {
  addContact,
};
