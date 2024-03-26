# ri-gen

`ri-gen` is a Node.js package designed to streamline the process of creating a basic project structure for web development. With `ri-gen`, you can quickly set up directories and files for your HTML, CSS, and JavaScript projects, saving you time and effort.

## Features

- **Interactive CLI**: `ri-gen` provides an interactive command-line interface (CLI) that guides you through the process of creating your project structure.
- **Customizable Templates**: Choose whether to create the project in the current directory or in a new directory, and customize your project name.
- **HTML, CSS, JavaScript Templates**: Generates boilerplate code for HTML, CSS, and JavaScript files.
- **Flexible Directory Structure**: Easily customize the directory structure to fit your project's needs.
- **Error Handling**: `ri-gen` includes error handling for file system operations, ensuring a smooth user experience.

## Installation

You can install `ri-gen` globally using npm:

```bash
npm install -g ri-gen
```

## Usage

To create a project in the current directory, run:

```bash
ri-gen
```

To create a project in a new directory, run:

```bash
ri-gen <project-name>
```

Follow the prompts in the CLI to customize your project.

## Example

Let's say you want to create a project named `my-project`:

```bash
ri-gen my-project
```

This will create the following directory structure:

```
my-project/
  ├── index.html
  ├── README.md
  ├── pages/
  ├── assets/
  │   ├── images/
  │   ├── svg/
  │   ├── videos/
  │   └── audio/
  ├── scripts/
  │   └── script.js
  └── styles/
      └── style.css
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/yourusername/ri-gen).


## Acknowledgements

- Special thanks to [Node.js](https://nodejs.org/) for providing the runtime environment.
- Inspired by similar projects such as `create-react-app` and `vite`.
