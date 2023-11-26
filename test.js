const { expect } = require("chai");
const { createCanvas } = require("canvas");
const { loadImage } = require("canvas");
const { join } = require("path");
const { createWriteStream } = require("fs");

const { Triangle, Square, Circle } = require("../src/shapes.js");
const { inquirer } = require("../src/inquirer.js");
const { createCanvas: createCanvas } = require("canvas");
const { loadImage } = require("canvas");
const { join } = require("path");
const { createWriteStream } = require("fs");

describe("SVG Logo Maker", function () {
  let canvas;
  let ctx;
  let image;

  before(async function () {
    canvas = createCanvas(300, 200);
    ctx = canvas.getContext("2d");
    image = await loadImage(join(__dirname, "logo.png"));
  });

  describe("When creating a triangle", function () {
    let triangle;

    before(function () {
      triangle = new Triangle("blue", "red", "abc");
    });

    it("should draw a blue triangle", function () {
      triangle.draw(ctx);
      const data = ctx.getImageData(0, 0, 300, 200);
      expect(data.data[0]).to.equal(0); // blue
      expect(data.data[1]).to.equal(0); // blue
      expect(data.data[2]).to.equal(255); // blue
    });

    it("should draw red text", function () {
      triangle.draw(ctx);
      const data = ctx.getImageData(0, 0, 300, 200);
      expect(data.data[180 * 4]).to.equal(255); // red
      expect(data.data[180 * 4 + 1]).to.equal(0); // red
      expect(data.data[180 * 4 + 2]).to.equal(0); // red
    });

    it("should draw the correct text", function () {
      triangle.draw(ctx);
      const data = ctx.getImageData(0, 0, 300, 200);
      expect(data.data[180 * 4 + 3]).to.equal(255); // alpha
      expect(data.data[181 * 4 + 3]).to.equal(255); // alpha
      expect(data.data[182 * 4 + 3]).to.equal(255); // alpha
    });
  });

  describe("When creating a square", function () {
    let square;

    before(function () {
      square = new Square("blue", "red", "def");
    });

    it("should draw a blue square", function () {
      square.draw(ctx);
      const data = ctx.getImageData(0, 0, 300, 200);
      expect(data.data[0]).to.equal(0); // blue
      expect(data.data[1]).to.equal(0); // blue
      expect(data.data[2]).to.equal(255); // blue
    });

    it("should draw red text", function () {
      square.draw(ctx);
      const data = ctx.getImageData(0, 0, 300, 200);
      expect(data.data[180 * 4]).to.equal(255); // red
      expect(data.data[180 * 4 + 1]).to.equal(0); // red
      expect(data.data[180 * 4 + 2]).to.equal(0); // red
    });

    it("should draw the correct text", function () {
      square.draw(ctx);
      const data = ctx.getImageData(0, 0, 300, 200);
      expect(data.data[180 * 4 + 3]).to.equal(255); // alpha
      expect(data.data[181 * 4 + 3]).to.equal(255); // alpha
      expect(data.data[182 * 4 + 3]).to.equal(255); // alpha
    });
  });
});
  describe("When creating a circle", function () {
    let circle;
    before(function () {
      circle = new Circle("blue", "red", "ghi");
    });
    it("should draw a blue circle", function () {
        circle.draw(ctx);
        const data = ctx.getImageData(0, 0, 300, 200);
        expect(data.data[0]).to.equal(0); // blue
        expect(data.data[1]).to.equal(0); // blue
        expect(data.data[2]).to.equal(255); // blue
    });
    it("should draw red text", function () {
        circle.draw(ctx);
        const data = ctx.getImageData(0, 0, 300, 200);
        expect(data.data[180 * 4]).to.equal(255); // red
        expect(data.data[180 * 4 + 1]).to.equal(0); // red
        expect(data.data[180 * 4 + 2]).to.equal(0); // red
    });
    it("should draw the correct text", function () {
        circle.draw(ctx);
        const data = ctx.getImageData(0, 0, 300, 200);
        expect(data.data[180 * 4 + 3]).to.equal(255); // alpha
        expect(data.data[181 * 4 + 3]).to.equal(255); // alpha
        expect(data.data[182 * 4 + 3]).to.equal(255); // alpha
    });
  });
  