"use strict";

class Circle extends Shape {
  constructor(spec) {
    super(spec);

    // default radius of 10
    let { radius = 10 } = spec;

    this.radius = radius;
  }

  // method to draw a circle on a canvas context
  draw(context) {
    context.beginPath();
    context.arc(this.center.x, this.center.y, this.radius, 0, 2*Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }

  // collision_radius getter
  get collision_radius() {
    return this.radius;
  }
}