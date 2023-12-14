class Shape {
    constructor(logoShapeColor, logoText, logoColor) {
      this.logoShapeColor = logoShapeColor;
      this.logoText = logoText;
      this.logoColor = logoColor;
    }
  
    getShapeColor() {
      return this.logoShapeColor;
    }
  
    getLogoColor() {
      return this.logoColor;
    }
  
    getLogoText() {
      return this.logoText;
    }
  }

  class Triangle extends Shape {
    constructor(logoShapeColor, logoText, logoColor) {
      super(logoShapeColor, logoText, logoColor);
    }
  
    render() {
      const shapeColor = this.getShapeColor();
      const textColor = this.getLogoColor();
      const logoText = this.getLogoText();
  
      
      const svgCode = ` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
          <text x="150" y="100" font-size="60" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text></svg>`;
  
      return svgCode;
    }
  }
  

  class Square extends Shape {
    constructor(logoShapeColor, logoText, logoColor) {
      super(logoShapeColor, logoText, logoColor);
    }
  
    render() {
      const shapeColor = this.getShapeColor();
      const textColor = this.getLogoColor();
      const logoText = this.getLogoText();
  
   
      const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="200" height="200" fill="${shapeColor}" />
          <text x="100" y="100" font-size="60" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text></svg>`;
  
      return svgCode;
    }
  }
  

  class Circle extends Shape {
    constructor(logoShapeColor, logoText, logoColor) {
      super(logoShapeColor, logoText, logoColor);
    }
  
    render() {
      const shapeColor = this.getShapeColor();
      const textColor = this.getLogoColor();
      const logoText = this.getLogoText();
  
      const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="100" cy="100" r="100" fill="${shapeColor}" />
      <text x="100" y="100" font-size="60" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text></svg>`;
  
      return svgCode;
    }
  }
  
  module.exports = { Triangle, Circle, Square }