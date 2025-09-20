const canvas = document.getElementById("canvas");
const brush= canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let balls = [
  { 
    x: (Math.random()*canvas.width), 
    y: (Math.random()*canvas.height), 
    vx: (Math.random()*3), 
    vy: (Math.random()*3), 
    r: (Math.random()*100), 
    color: "red" 
  }
];
function drawBall(b) {
  brush.beginPath();
  brush.arc(b.x, b.y, b.r, 0, Math.PI * 2);
  brush.fillStyle = b.color;
  brush.fill();
}

function updateBall(b) {
  b.x += b.vx;
  b.y += b.vy;

  if (b.x - b.r < 0 || b.x + b.r > canvas.width)
     b.vx *= -1;
  if (b.y - b.r < 0 || b.y + b.r > canvas.height) 
    b.vy *= -1;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach(b => {
    updateBall(b);
    drawBall(b);
  });
  requestAnimationFrame(animate);
}

canvas.addEventListener("click", () => {
  let newBalls = [];
  balls.forEach(b => {
    let angle = Math.random() * Math.PI * 2;
    newBalls.push({
      x: b.x,
      y: b.y,
      vx: Math.cos(angle) * 3,
      vy: Math.sin(angle) * 3,
      r: b.r,
      color: `hsl(${Math.random() * 360},100%,50%)`
    });
  });
  balls = balls.concat(newBalls);
});

animate();

