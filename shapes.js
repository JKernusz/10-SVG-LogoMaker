class Shape {
  constructor(color, color2, text) {
    this.color = color;
    this.color2 = color2;
    this.text = text;
  }
}

class Triangle extends Shape {
  constructor(color, color2, text) {
    super(color, color2, text);
  }
  draw() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text x="150" y="140" font-size="45" text-anchor="middle" fill="${this.color2}">${this.text}</text></svg>`
  }
}

class Square extends Shape {
  constructor(color, color2, text) {
    super(color, color2, text);
  }
  draw() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><rect x="70" y="33" width="170" height="170" fill="${this.color}"/>
    <text x="155" y="130" font-size="60" text-anchor="middle" fill="${this.color2}">${this.text}</text></svg>`;
  }
}

class Circle extends Shape {
  constructor(color, color2, text) {
    super(color, color2, text);
  }
  draw() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.color}" />
    <text x="150" y="113" font-size="60" text-anchor="middle" fill="${this.color2}">${this.text}</text></svg>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle };
