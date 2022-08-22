const fs = require("fs");

const persons = [
  { id: 1, fullname: "hassan saber" },
  { id: 2, fullname: "sepehr baxtiar" },

  { id: 3, fullname: "parsa jahesh" },
];

//contacts added once
// fs.writeFile("contacts/contacts.json", JSON.stringify(persons), (err) => {
//   if (err) throw err;
//   console.log("contacts added");
// });

const bufferData = fs.readFileSync("./contacts/contacts.json");
const stringData = bufferData.toString();
const dataObject = JSON.parse(stringData);
console.log(dataObject);

//----------------------------------------------

// console.log(process.argv[2]);

const command = process.argv[2];

// if (command === "add") console.log("adding...");
// else console.log("command not valid");

switch (command) {
  case "add":
    console.log("adding...");
    break;
  case "remove":
    console.log("removing...");
    break;
  default:
    console.log("command not valid");
    break;
}
