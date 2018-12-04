class Circle extends Shape {
  constructor(spec) {
    super(spec);

    let { radius = 10 } = spec;

    this.radius = radius;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.center.x, this.center.y, this.radius, 0, 2*Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }

  get collision_radius() {
    return this.radius;
  }
}