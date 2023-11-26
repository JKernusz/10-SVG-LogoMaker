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
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect x="0" y="0" width="300" height="200" fill="${this.color}" stroke="${this.color2}" stroke-width="10"/>
        <polygon points="100,100 200,100 150,150" fill="${this.color2}" stroke="${this.color2}" stroke-width="10"/>
        <text x="150" y="150" fill="${this.color2}" stroke="${this.color2}" stroke-width="10">${this.text}</text>
        </svg>`;
  }
}

class Square extends Shape {
  constructor(color, color2, text) {
    super(color, color2, text);
  }
  draw() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect x="0" y="0" width="300" height="200" fill="${this.color}" stroke="${this.color2}" stroke-width="10"/>
        <rect x="100" y="100" width="100" height="100" fill="${this.color2}" stroke="${this.color2}" stroke-width="10"/>
        <text x="150" y="150" fill="${this.color2}" stroke="${this.color2}" stroke-width="10">${this.text}</text>
        </svg>`;
  }
}

class Circle extends Shape {
  constructor(color, color2, text) {
    super(color, color2, text);
  }
  draw() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="150" cy="150" r="100" fill="${this.color}" stroke="${this.color2}" stroke-width="10"/>
        <text x="150" y="150" fill="${this.color2}" stroke="${this.color2}" stroke-width="10">${this.text}</text>
        </svg>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle };
