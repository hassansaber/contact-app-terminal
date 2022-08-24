
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

//list all contacts
const contactsList = () => {
  const contacts = loadContacts()
  console.log(`\n${chalk.yellowBright("here is your contacts:")}\n`);

  contacts.forEach(contact => {
    console.log(`\t ${chalk.blueBright(`Full Name :`)} ${chalk.gray(contact.fullname)} `);
    console.log(`\t ${chalk.blueBright(`Phone Number :`)} ${chalk.gray(contact.phone)} `);
    console.log(`\t ${chalk.blueBright(`Email Address :`)} ${chalk.gray(contact.email)} `);
    console.log(`\t ${chalk.cyan('--------------------------------')}`)
  });
}

//remove single contact
const deleteContact = (fullname) => {
  const contacts = loadContacts()

  const filterdContacts = contacts.filter(contact => contact.fullname !== fullname)
  if (filterdContacts.length !== contacts.length) {
    saveContacts(filterdContacts)
    console.log(chalk.green(`contact with name of ${fullname} removed successfully`));
  } else {
    console.log(chalk.red(`there is no contact with name  ${fullname}`));

  }
}




module.exports = {
  addContact,
  contactsList,
  deleteContact
};
