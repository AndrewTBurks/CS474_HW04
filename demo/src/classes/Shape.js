"use strict";

class Shape {
  constructor({ center = { x: 0, y: 0 }, color = "blue", ...spec }) {
    // all shapes have color and center location
    // use these with default values

    this.center = center;
    this.color = color;

    this.direction = { vx: 1, vy: 0 };
    this.speed = 0.2;
  }

  // abstract method
  draw() {
    throw new Error(`${this.constructor.name} must implement draw()`);
  }

  // abstract method
  get collision_radius() {
    throw new Error(
      `${this.constructor.name} must implement get collision_radius()`
    );
  }

  // getter for position
  get position() {
    return this.center;
  }

  // setter for position
  set position(position) {
    if (!position.x || !position.y) { // ensure format of values input
      throw new Error("Shape.position must contain {x, y}");
    }

    this.center = position;
  }
}