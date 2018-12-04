"use strict";

const factory = new ShapeFactory({
  circle: Circle,
  square: Square
});

let shapes = scene.map(factory.create);
shapes.forEach(s => {
  let angle = Math.random() * Math.PI * 2;

  let direction = {
    vx: Math.cos(angle),
    vy: Math.sin(angle)
  };

  s.direction = direction;
});

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
let lastTimestamp = null;

window.onclick = function() {
  if (animation) {
    cancelAnimationFrame(animation);
    animation = null;
    lastTimestamp = null;
  } else {
    animation = requestAnimationFrame(animate);
  }
}

window.onblur = function() {
  cancelAnimationFrame(animation);
  animation = null;
  lastTimestamp = null;
}

function animate(timestamp) {
  if (!lastTimestamp) { 
    lastTimestamp = timestamp;
  }

  let offset = timestamp - lastTimestamp;

  shapes.forEach(s => {
    let { x, y } = s.position;
    let {vx, vy} = s.direction;

    let rad = s.collision_radius;

    let position = { x: (x + (vx * s.speed * offset)), y: (y + (vy * s.speed * offset))};

    // add collision and bouncing
    if (position.x - rad <= 0 && vx < 0) {
      s.direction = {
        vx: -vx,
        vy
      };
    } else if (position.x + rad >= size.x && vx > 0) {
      s.direction = {
        vx: -vx,
        vy
      };
    } else if (position.y - rad <= 0 && vy < 0) {
      s.direction = {
        vx,
        vy: -vy
      };
    } else if(position.y + rad >= size.y && vy > 0) {
      s.direction = {
        vx,
        vy: -vy
      };
    }

    s.position = position;
  });

  lastTimestamp = timestamp;


  render();
  animation = requestAnimationFrame(animate);
}
