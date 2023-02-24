const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    question: "What is the title of the project?",
  },
  {
    type: "input",
    name: "Description",
    question: "What is the description of the project?",
  },
  {
    type: "input",
    name: "Installation",
    question: "Provide installation instructions for the project. ",
  },
  {
    type: "input",
    name: "Usage",
    question: "Provide usage instructions for the project.",
  },
  {
    type: "list",
    name: "Licence",
    question: "What licence do you want to use?",
    choices: ["MIT", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "Contributing",
    question: "Provide contribution guide for the project.",
  },
  {
    type: "input",
    name: "Tests",
    question: "Provide testing instructions for the project.",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
