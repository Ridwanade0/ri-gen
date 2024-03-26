#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `Do you want to create the project in the current folder? (Y/N')  `,
  (answer) => {
    if (answer.toLowerCase() === "y") {
      createProjectInCurrentDirectory();
      rl.close();
    } else if (answer.toLowerCase() === "n") {
      rl.question(`What is your project name?  `, (answer) => {
        createProjectInNewDirectory(answer);
        rl.close();
      });
    } else {
      console.log("Please enter Y or N");
      rl.close();
    }
  }
);
// HTML template function
function generateHTML(name) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${name}</title>
        <link rel="stylesheet" href="./styles/style.css" />
      </head>
      <body>
        <h1>Hello, world!</h1>
        <p>Your project name is ${name}</p>
        <script src="./scripts/script.js"></script>
      </body>
    </html>
    `;
}

// CSS template
const css = `/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Your custom styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    padding: 20px;
}

h1 {
    color: #007bff;
}`;

// JavaScript template
const js = `// Your JavaScript code goes here
console.log('Hello, world!');`;

// Function to create a directory
async function createDirectory(dirPath) {
  try {
    await fs.mkdir(dirPath);
  } catch (error) {}
}

// Function to create a file
async function createFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
  } catch (error) {}
}

// Main function to create project files in the current directory
async function createProjectInCurrentDirectory() {
  try {
    const cwd = process.cwd();
    const projectName = path.basename(cwd);

    await createFile(path.join(cwd, "index.html"), generateHTML(projectName));
    await createFile(path.join(cwd, "README.md"), `# ${projectName}`);

    await createDirectory(path.join(cwd, "pages"));
    await createDirectory(path.join(cwd, "assets"));
    await createDirectory(path.join(cwd, "assets", "images"));
    await createDirectory(path.join(cwd, "assets", "svg"));
    await createDirectory(path.join(cwd, "assets", "videos"));
    await createDirectory(path.join(cwd, "assets", "audio"));
    await createDirectory(path.join(cwd, "scripts"));
    await createFile(path.join(cwd, "scripts", "script.js"), js);
    await createDirectory(path.join(cwd, "styles"));
    await createFile(path.join(cwd, "styles", "style.css"), css);

    console.log(`${projectName} created successfully`);
  } catch (error) {
    console.error(`Error creating project files: ${error}`);
  }
}

async function createProjectInNewDirectory(userProjectName) {
  let projectName = userProjectName;
  try {
    const cwd = process.cwd();
    const rootPath = path.join(cwd, projectName);
    // creating projectFolder
    await createDirectory(rootPath);
    // creating index.html
    await createFile(
      path.join(rootPath, "index.html"),
      generateHTML(projectName)
    );
    // creating README.md
    await createFile(path.join(rootPath, "README.md"), `# ${projectName}`);
    // creating pages folder
    await createDirectory(path.join(rootPath, "pages"));
    // creating assets folder
    await createDirectory(path.join(rootPath, "assets"));
    // creating styles folder
    await createDirectory(path.join(rootPath, "styles"));
    // creating scripts folder
    await createDirectory(path.join(rootPath, "scripts"));
    // creatiing styles/style file
    await createFile(path.join(rootPath, "styles", "style.css"), css);
    // creating scripts/script file
    await createFile(path.join(rootPath, "scripts", "script.js"), js);
    // creating assets/images folder
    await createDirectory(path.join(rootPath, "assets", "images"));
    // creating assets/svg folder
    await createDirectory(path.join(rootPath, "assets", "svg"));
    // creating assets/videos folder
    await createDirectory(path.join(rootPath, "assets", "videos"));
    // creating assets/audio folder
    await createDirectory(path.join(rootPath, "assets", "audio"));
    // creating scripts folder

    console.log(`${projectName} created successfully`);
  } catch (error) {
    console.error(`Error creating project files: ${error}`);
  }
}

// createProjectInNewDirectory()
// createProjectInCurrentDirectory();
