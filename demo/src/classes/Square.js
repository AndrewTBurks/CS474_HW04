"use strict";

class Square extends Shape {
  constructor(spec) {
    super(spec);

    // default sidelength of 10
    let { side = 10 } = spec;

    this.side = side;
  }

  // method to draw a square on a canvas context
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(
      this.center.x - this.side / 2,
      this.center.y - this.side / 2,
      this.side,
      this.side
    );
  }

  // collision_radius getter
  get collision_radius() {
    return this.side / 2;
  }
}