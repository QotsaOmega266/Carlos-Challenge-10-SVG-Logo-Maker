
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./Lib/Shapes");
const render = require("./Lib/generateLogo");
const renderSVG = require("./Lib/generateLogo");

const userQuestions = [
  {
    type: "input",
    message: "Enter text (up to three characters):",
    name: "logoText",
  },
  {
    type: "input",
    message: "Enter color: ",
    name: "logoColor",
  },
  {
    type: "list",
    message: "Choose a background shape:",
    choices: ["Triangle", "Circle", "Square"],
    name: "logoShape",
  },
  {
    type: "input",
    message: "Enter shape color(keywords):",
    name: "logoShapeColor",
  },
];


function writeToFile(fileName, data) {
  fs.appendFile(`./SVG/${fileName}.svg`, data, (err) =>
    err ? console.log(err) : console.log("Logo saved to SVG folder")
  );
}


function init() {
  inquirer.prompt(userQuestions).then(function (answer) {
    var createSVG = renderSVG(answer);
    writeToFile(answer.logoText, createSVG);
  });
}

init();


