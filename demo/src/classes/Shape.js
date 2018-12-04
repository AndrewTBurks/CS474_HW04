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
    throw new Error(`${this.constructor.name} must override draw()`);
  }

  // abstract method
  get collision_radius() {
    throw new Error(
      `${this.constructor.name} must override get collision_radius()`
    );
  }

  // getter for position
  get position() {
    return this.center;
  }

  // setter for position
  set position(position) {
    this.center = position;
  }
}