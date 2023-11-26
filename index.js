let { Triangle, Square, Circle } = require("./shapes.js");
let inquirer = require("inquirer");
let fs = require("fs");
let shape = ``;

const questions = [
  {
    type: "list",
    name: "shape",
    message: "What type of shape would you like?",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    name: "color",
    message: "What is the color of the shape?",
  },
  {
    type: "input",
    name: "color2",
    message: "What is the color of your text?",
  },
  {
    type: "input",
    name: "text",
    message: "What are the 3 letters in the shape?",
    validate: function (text) {
      if (text.length > 3) {
        return "please enter 3 letters";
      }
      return true;
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  const { shape, color, color2, text } = answers;
  if (shape === "Triangle") {
    const triangle = new Triangle(color, color2, text);
    shape = triangle.draw();
  } else if (shape === "Square") {
    const square = new Square(color, color2, text);
    shape = square.draw();
  } else if (shape === "Circle") {
    const circle = new Circle(color, color2, text);
    shape = circle.draw();
  } else {
    console.log("please enter a valid shape");
  }
  let shapeFile = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">${shape}</svg>`;
  fs.writeFile("shapes.svg", shapeFile, (err) => {
    if (err) throw err;
    console.log("file saved");
  });
});
