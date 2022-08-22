const yargs = require("yargs");
const { addContact } = require("./contacts");
//---------------------------------------------------

//create a command
yargs.command({
  command: "create", //name
  aliases: ["c", "cr"], // set acronyms
  describe: "[create new contact]", // info
  builder: {
    //build flag
    fullname: {
      //name --fullname
      describe: "person fullname",
      demandOption: true, // make flag required
      type: "string", // set type
      alias: "f", //set acronym -f
    },
    phone: {
      describe: "person phone number",
      demandOption: true,
      type: "number",
      alias: "p",
    },
    email: {
      describe: "person email address",
      demandOption: true,
      type: "string",
      alias: "e",
    },
  },
  //func ==> what u do with data received from flags
  handler({ fullname, email, phone }) {
    addContact(fullname, email, phone);
  },
});

yargs.parse(); //it returns args --> so we can always use them

// console.log(yargs.argv);
