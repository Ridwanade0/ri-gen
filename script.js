const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createProjectDirectory() {
  try {
    const projectLocation = await askQuestion("Do you want to create the project in the current directory? (Y/N): ");
    if (projectLocation.toUpperCase() === "Y") {
      const projectName = path.basename(__dirname);
      await createProject(projectName);
    } else {
      const projectName = await askQuestion("What is your project name? ");
      await createProject(projectName);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    rl.close();
  }
}

async function createProject(projectName) {
  console.log(`Creating project: ${projectName}`);
  const rootFilePath = path.join(__dirname, projectName);

  process.stdout.write("Creating project directory... ");
  await fs.mkdir(projectName);
  console.log("Done.");

  process.stdout.write("Creating index.html file... ");
  await writeFile(path.join(projectName, "index.html"), getIndexHtmlContent(projectName));
  console.log("Done.");

  process.stdout.write("Creating README.md file... ");
  await writeFile(path.join(projectName, "README.md"), `# ${projectName}`);
  console.log("Done.");

  await Promise.all([
    createDirectory(path.join(rootFilePath, "pages")),
    createDirectory(path.join(rootFilePath, "css")),
    createDirectory(path.join(rootFilePath, "js")),
    createDirectory(path.join(rootFilePath, "assets", "images")),
    createDirectory(path.join(rootFilePath, "assets", "svg")),
    createDirectory(path.join(rootFilePath, "assets", "videos")),
  ]);

  process.stdout.write("Creating styles.css file... ");
  await writeFile(path.join(rootFilePath, "css", "styles.css"), getStylesCssContent());
  console.log("Done.");

  process.stdout.write("Creating script.js file... ");
  await writeFile(path.join(rootFilePath, "js", "script.js"), getScriptJsContent());
  console.log("Done.");

  console.log("Project creation completed successfully.");
}

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function createDirectory(directoryPath) {
  process.stdout.write(`Creating directory: ${directoryPath}... `);
  await fs.mkdir(directoryPath, { recursive: true });
  console.log("Done.");
}

async function writeFile(filePath, content) {
  process.stdout.write(`Creating file: ${filePath}... `);
  await fs.writeFile(filePath, content);
  console.log("Done.");
}

function getIndexHtmlContent(projectName) {
  return `<!DOCTYPE html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>${projectName}</title>
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <h1>Hello World</h1>
    <script src="./js/script.js"></script>
</body>
</html>`;
}

function getStylesCssContent() {
  return `/* style.css */

body, h1 {
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
}

h1 {
    font-family: Arial, sans-serif;
    color: #333;
    margin-top: 50px;
}`;
}

function getScriptJsContent() {
  return `// script.js

document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');

    heading.addEventListener('click', function() {
        this.style.color = 'red';
    });
});`;
}

createProjectDirectory();
