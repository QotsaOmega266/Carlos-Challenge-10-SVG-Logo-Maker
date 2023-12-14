const { Circle, Square, Triangle } = require('./Lib/shapes');

function generateLogo(response) {
    const shapes = {
      Circle: Circle,
      Triangle: Triangle,
      Square: Square,
    };
    const pickedShape = shapes[response.logoShape];
  
  
    if (chosenShape) {
      const userShape = new chosenShape(
        response.logoShapeColor,
        response.logoText,
        response.logoColor
      );
      return userShape.render();
    }
  }
  
  module.exports = generateLogo;