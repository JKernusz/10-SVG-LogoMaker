const { describe } = require('node:test');
const {Triangle, Square, Circle, Shape} = require('./shapes.js');


describe('shapesCheck', () => {
  it('creates a Triangle', () => {
    const triangle = new Triangle('red', 'blue', 'abc');
    expect(triangle.color).toBe('red');
    expect(triangle.color2).toBe('blue');
    expect(triangle.text).toBe('abc');
    expect(triangle.draw()).toBe(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" />
    <text x="150" y="140" font-size="45" text-anchor="middle" fill="blue">abc</text></svg>`)
  });
  it('creates a Square', () => {
    const square = new Square('red', 'blue', 'abc');
    expect(square.color).toBe('red');
    expect(square.color2).toBe('blue');
    expect(square.text).toBe('abc');
    expect(square.draw()).toBe(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><rect x="70" y="33" width="170" height="170" fill="red"/>
    <text x="155" y="130" font-size="60" text-anchor="middle" fill="blue">abc</text></svg>`)
  });
  it('creates a Circle', () => {
    const circle = new Circle('red', 'blue', 'abc');
    expect(circle.color).toBe('red');
    expect(circle.color2).toBe('blue');
    expect(circle.text).toBe('abc');
    expect(circle.draw()).toBe(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="red" />
    <text x="150" y="113" font-size="60" text-anchor="middle" fill="blue">abc</text></svg>`)
  });
});




