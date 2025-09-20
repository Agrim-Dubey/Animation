
const canvas = document.getElementById("raincanvas");
const brush = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const raindrops = [];
let totaldrops = 400;
for (let i = 0; i < totaldrops; i++) {
  raindrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 8 + 2,
  });
}

function drawingtherain() {
  brush.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < raindrops.length; i++) {
    const drop = raindrops[i];
    brush.beginPath();
    brush.strokeStyle = `rgba(19, 162, 210, 1)`;
    brush.lineWidth =1;
    brush.moveTo(drop.x, drop.y);
    brush.lineTo(drop.x, drop.y + drop.length); 
    brush.stroke(); 
    
    drop.y += drop.speed; 
    if (drop.y > canvas.height) { 
      drop.y = -drop.length; 
      drop.x = Math.random() * canvas.width;
    }
  }
   requestAnimationFrame(drawingtherain); 
}
drawingtherain();
document.getElementById("intensity").addEventListener("click", () => {
  const newDrops = 100;
  for (let i = 0; i < newDrops; i++) {
    raindrops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 8 + 2,
    });
  }
  for (let drop of raindrops) {
    drop.speed += 1.5; 
  }
  totaldrops += newDrops;
});