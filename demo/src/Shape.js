class Shape {
  constructor(spec) {
    // all shapes have color and center location
    // use these with default values
    let {center = {x: 0, y: 0}, color = "blue"} = spec;

    this.center = center;
    this.color = color;
  }

  // abstract method
  draw() {
    throw new Error(`${this.constructor.name} must override draw()`);
  } 

  get position() {
    return this.center;
  }

  set position(position) {
    this.center = position;
  }
}