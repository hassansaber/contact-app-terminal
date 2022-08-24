const yargs = require("yargs");
      const {deleteContact ,addContact,contactsList, } = require("./contacts");
const chalk = require('chalk');
const { alias } = require("yargs");
//---------------------------------------------------

yargs.scriptName(chalk.yellow(`[CONTACT MANAGER]`))
yargs.usage(`$0 ${chalk.red('<command>')} ${chalk.green('[args]')}`)
yargs.version("1.0.8");

//create a command
yargs.command({
  command:  chalk.cyan("create"), //name 
  aliases: ["c", "cr"], // set acronyms
  describe: chalk.green('[create new contact]'), // info
  builder: {
    //build flag
    fullname: {
      //name --fullname
      describe: "person fullname",
      demandOption: true, // make flag required
      type: "string", // set type
      alias: "f", //set acronym -f
    },
    email: {
      describe: "person email address",
      demandOption: true,
      type: "string",
      alias: "e",
    },
    phone: {
      describe: "person phone number",
      demandOption: true,
      type: "number",
      alias: "p",
    },
  },
  //func ==> what u do with data received from flags
  handler({ fullname, phone, email }) {
    addContact(fullname, phone, email);
  },
});


//listing contacts
yargs.command({
  command: chalk.cyan(`list`),
  aliases: ['l'],
  describe:  `${chalk.green('[list of all contacts]')}`,
  handler(){
    contactsList()
  }
  
})

//remove single contact by fullname 
yargs.command({
  command: chalk.cyan(`remove`),
  aliases: ['r'],
  describe:  `${chalk.green('[remove person from contacts list]')}`,
  builder: {
    fullname: {
      describe: 'person full name',
      alias: 'f',
      demandOption: true,
      type: 'string'
    }
    
  },
  handler({fullname}){
    deleteContact(fullname)
  }
  


})


yargs.parse(); //it returns args --> so we can always use them

// console.log(yargs.argv);
