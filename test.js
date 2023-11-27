const { describe } = require('node:test');
const {Triangle, Square, Circle, Shape} = require('./shapes.js');


describe('shapesCheck', () => {
  it('creates a Triangle', () => {
    const triangle = new Triangle('red', 'blue', 'abc');
    expect(triangle.color).toBe('red');
    expect(triangle.color2).toBe('blue');
    expect(triangle.text).toBe('abc');
  });
  it('creates a Square', () => {
    const square = new Square('red', 'blue', 'abc');
    expect(square.color).toBe('red');
    expect(square.color2).toBe('blue');
    expect(square.text).toBe('abc');
  });
  it('creates a Circle', () => {
    const circle = new Circle('red', 'blue', 'abc');
    expect(circle.color).toBe('red');
    expect(circle.color2).toBe('blue');
    expect(circle.text).toBe('abc');
  });
});

