class Square extends Shape {
  constructor(spec) {
    super(spec);

    let { side = 10 } = spec;

    this.side = side;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(
      this.center.x - this.side/2,
      this.center.y - this.side/2,
      this.side,
      this.side
    );
  }
}