"use strict";

// set the type:Class mapping
const factory = new ShapeFactory({
  circle: Circle,
  square: Square
});

// create the shapes from the scene
let shapes = scene.map(factory.create);

// give the shapes an initial random velocity
shapes.forEach(s => {
  let angle = Math.random() * Math.PI * 2;

  let direction = {
    vx: Math.cos(angle),
    vy: Math.sin(angle)
  };

  s.direction = direction;
});

// set up the canvas
let canvas = document.getElementById("drawarea");
let context = canvas.getContext("2d");

let size = {
  x: window.innerWidth,
  y: window.innerHeight
};

context.canvas.width = size.x;
context.canvas.height = size.y;

// perform an initial render
render();

// render function, calls draw on each shape
function render() {
  context.clearRect(0, 0, size.x, size.y);
  shapes.forEach(s => s.draw(context));
}

// resize handler to resize canvas and redraw
window.onresize = function() {
  size = {
    x: window.innerWidth,
    y: window.innerHeight
  };

  context.canvas.width = size.x;
  context.canvas.height = size.y;

  render();
};

// animation setup
let animation = null;
let lastTimestamp = null;

// onclick start animation using requestAnimationFrame
window.onclick = function() {
  if (animation) {
    cancelAnimationFrame(animation);
    animation = null;
    lastTimestamp = null;
  } else {
    animation = requestAnimationFrame(animate);
  }
}

// onblur cancel animation to prevent problems with slow event-loop out of focus
window.onblur = function() {
  cancelAnimationFrame(animation);
  animation = null;
  lastTimestamp = null;
}

// function to animate
function animate(timestamp) {
  if (!lastTimestamp) { 
    lastTimestamp = timestamp;
  }

  // calculate offset since last animation
  let offset = timestamp - lastTimestamp;

  // move each shape
  shapes.forEach(s => {
    // get the position and velocity of each shape
    let { x, y } = s.position;
    let {vx, vy} = s.direction;

    // and the collision radius
    let rad = s.collision_radius;

    // calculate the new position based on velocity
    let position = { x: (x + (vx * s.speed * offset)), y: (y + (vy * s.speed * offset))};

    // add collision and bouncing, changing velocity on collision
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

    // set the new position
    s.position = position;
  });

  // update the lastTimestep for the offset on the next frame
  lastTimestamp = timestamp;

  // draw shapes in their new positions
  render();

  // request next frame
  animation = requestAnimationFrame(animate);
}
