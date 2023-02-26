const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    question: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    question: "What is the description of the project?",
  },
  {
    type: "input",
    name: "installation",
    question: "Provide installation instructions for the project. ",
  },
  {
    type: "input",
    name: "usage",
    question: "Provide usage instructions for the project.",
  },
  {
    type: "list",
    name: "license",
    question: "What licence do you want to use?",
    choices: ["MIT", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "contributing",
    question: "Provide contribution guide for the project.",
  },
  {
    type: "input",
    name: "tests",
    question: "Provide testing instructions for the project.",
  },
];

// function to write README file
function writeToFile(title, data) {
  const fileName = `${title.trim().replace(/\s+/g, "-").toLowerCase()}.md`;
  // fileName - the name of the file to be written (string); data - the content to be written to the file
  // Combine the current working directory with the provided file name
  // path is a module; process.cwd is the current working directory
  const fileEl = path.join(process.cwd(), fileName);
  // Write the data to the file at the specified path (fileEl)
  // fs is a module; writeFileSync is a node method and it writes the data to the file
  fs.writeFileSync(fileEl, data);
}

// test of the function above - it works --> text file created successfully
// writeToFile('test.txt', 'Code with corgis');

// function to initialize program
async function init() {
    try {
        // prompt user with questions
        const answers = await inquirer.prompt(questions);
        console.log("Generating README.md...");
        // generate markdown content based on user's answers
        const markdown = generateMarkdown(answers);
        // write markdown content to file
        writeToFile("README", markdown);
        console.log("README.md file generated successfully!");
      } catch (err) {
        console.error(err);
      }
}

// function call to initialize program
init();


  