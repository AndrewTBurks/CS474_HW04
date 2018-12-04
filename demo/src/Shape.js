class Shape {
  constructor(spec) {
    // all shapes have color and center location
    // use these with default values
    let { center = { x: 0, y: 0 }, color = "blue" } = spec;

    this.center = center;
    this.color = color;

    this.direction = { vx: 1, vy: 0 };
    this.speed = 0.25;
  }

  // abstract method
  draw() {
    throw new Error(`${this.constructor.name} must override draw()`);
  }

  // abstract method
  get collision_radius() {
    throw new Error(`${this.constructor.name} must override get collision_radius()`);
  }

  get position() {
    return this.center;
  }

  set position(position) {
    this.center = position;
  }
}