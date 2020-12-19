// const fs = require("fs");
// const { stringify } = require("querystring");
// const inquirer = require("inquirer");


// let rawdata = fs.readFileSync("./recruiters.json");
// let recruiters = JSON.parse(rawdata);
// let found = false;
// let index;
// let newRecruiter = {};
// let newList;

// const questions = [{
//   type: "input",
//   message: "What is the recruiter's name?",
//   name: "recName"
// },{
//   type: "list",
//   message: "Which key would you like to update?",
//   name: "updateWhich",
//   choices: ["name", "title", "contactInfo", "response", "none"]
// },{
//   type: "list",
//   message: "Did you want to add/update another?",
//   name: "updateAnother",
//   choices: ["yes", "no"]
// },{
//   type: "input",
//   message: "what was the latest response from this recruiter?",
//   name: "latestResponse" 
// },{
//   type: "input",
//   message: `What would you like to change it to?`,
//   name: "whichToUpdate"
// },{
//   type: "input",
//   message: `We've got a fresh one here!  What's their Title?`,
//   name: "recTitle"
// },{
//   type: "input",
//   message: "When did you reach out to them?",
//   name: "recContact"
// },{
//   type: "input",
//   message: "And lastly, if you've gotten a response from them, what was it?  (enter in format: '##/##/## - Told me so and so",
//   name: "recResponse"
// }]

// function init() {
//   inquirer
//   // This will ask the first question.  If it finds a match for what you enter it will change "found" to true and will save the match's index.
//   .prompt(questions[0]).then((ansOne) => {
//     recruiters.map(recruiter => {
//       if (recruiter.name.includes(ansOne.recName)) {
//         index = recruiters.indexOf(recruiter)
//         found = true
//       }
//     })
//     // if "found" is true it will let console.log the entry that matched and ask you the second question.  If you answer none, the program will end.  If you answer response it will ask you for a new response and add the it to the end of the current response.   If you answer one of the other keys, you will be able to update that key.
//     if (found) {
//       console.log(recruiters[index]);
//       inquirer
//       .prompt(questions[1]).then((ans) => {
//         if (ans.updateWhich === "none") {
//           console.log("Go out and get hired already!");
//           return
//         } else if (ans.updateWhich === "response") {
//           inquirer
//           .prompt(questions[3]).then((ans2) => {
//             recruiters[index].response = recruiters[index].response.concat(` --- ${ans2.latestResponse}`);
//           })
//         } else {
//           inquirer
//           .prompt(questions[4]).then((ans3) =>
//           {
//             recruiters[index].ans.updateWhich = ans3.whichToUpdate
//           })
//         }
//         inquirer
//         .prompt(questions[2]).then((ans4) => {
//           if (ans4.updateAnother === "yes") {
//             init();
//           } else {
//             console.log("Go get hired already!")
//             return
//           }
//         })
//         // recruiters[index][ans]
//       })
//     } else {
//       inquirer
//       .prompt(questions[5]).then((ans6) => {
//         newRecruiter.name = ansOne.recName
//         newRecruiter.title = ans6.recTitle;
//       })
//       inquirer
//       .prompt(questions[6]).then((ans7) => {
//         newRecruiter.contactInfo = ans7.recContact;
//       })
//       inquirer
//       .prompt(questions[7]).then((ans8) => {
//         newRecruiter.response = ans8.recResponse;
//         newList = addNewRecruiterToList(recruiters, newRecruiter);
//       })
//       inquirer
//       .prompt(questions[2]).then((ans9) => {
//         if (ans9.updateAnother === "yes") {
//           init()
//         } else {
//           console.log("Go out and get hired already!");
//           return
//         }
//       })
//     }
//   })
// }

// init();

// // const fakeRecruiter = {
// //   name: "Taco Tuesday",
// //   title: "Taco eater",
// //   contactInfo: "NEVER",
// //   response: "a taco a day keeps the weight loss away"
// // };


// // this will take the existing list "oldList", add the new recruiter to end of it and return the newly formed list.
// const addNewRecruiterToList = (oldList, newRecruiter) => {
//   oldList.splice(1, 0, newRecruiter)
//   oldList.sort((a, b) => (a.name > b.name) ? 1 : -1)
//   return oldList
// }

// // console.log(recruiters)
// // const jsonString = JSON.stringify(newList);
// // console.log(newList)

// // fs.writeFile("./recruiters.json", jsonString, err => {
// //   if (err) {
// //     console.log("Error writing file", err)
// //   } else {
// //     console.log("Successfully wrote file")
// //   }
// // })

// // // console.log(JSON.stringify(recruiters))
// // // JSON.stringify(fakeRecruiter);
// // // console.log(jsonString);








console.log("BROKEN!!!!!!!")
console.log("I beleive I need to group questions together into sequential groups.  Done for the day.")