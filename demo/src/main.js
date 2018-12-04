"use strict";

const factory = new ShapeFactory({
  circle: Circle,
  square: Square
});

let shapes = scene.map(factory.create);

let canvas = document.getElementById("drawarea");
let context = canvas.getContext("2d");

let size = {
  x: window.innerWidth,
  y: window.innerHeight
};

context.canvas.width = size.x;
context.canvas.height = size.y;

render();

console.log(canvas, context);

function render() {
  context.clearRect(0, 0, size.x, size.y);
  shapes.forEach(s => s.draw(context));
}

window.onresize = function() {
  size = {
    x: window.innerWidth,
    y: window.innerHeight
  };

  context.canvas.width = size.x;
  context.canvas.height = size.y;


  render();
};

let animation = null;
let lastTimestamp;

window.onclick = function() {
  if (animation) {
    cancelAnimationFrame(animation);
    animation = null;
  } else {
    animation = requestAnimationFrame(animate);
  }
}

function animate(timestamp) {
  if (!lastTimestamp) { 
    lastTimestamp = timestamp;
  }

  let offset = timestamp - lastTimestamp;

  shapes.forEach(s => {
    let {x, y} = s.position;

    let position = { x: (x + 0.1 * offset) % size.x, y: (y + 0.2 * offset) % size.y };
    s.position = position;
  });

  lastTimestamp = timestamp;


  render();
  animation = requestAnimationFrame(animate);
}
