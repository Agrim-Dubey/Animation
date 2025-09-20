const canvas = document.getElementById("canvas");
const brush = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

function Firework(x, y) {
  const count = 500;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = Math.random() * 5 + 2;
    particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: `hsl(${Math.random() * 360},100%,50%)`
    });
  }
}

function animate() {
  brush.fillStyle = "rgba(0, 0, 0, 0.3)";
  brush.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05;
    p.alpha -= 0.01;

    brush.globalAlpha = p.alpha;
    brush.fillStyle = p.color;
    brush.beginPath();
    brush.arc(p.x, p.y, 3, 0, Math.PI * 2);
    brush.fill();

    if (p.alpha <= 0) {
      particles.splice(index, 1);
    }
  });

  brush.globalAlpha = 1;
  requestAnimationFrame(animate);
}

canvas.addEventListener("click", function(e) {
  Firework(e.clientX, e.clientY);
});

animate();
