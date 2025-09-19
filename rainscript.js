
const canvas = document.getElementById("raincanvas");
const brush = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const raindrops = [];
const totaldrops = 500;
for (let i = 0; i < totaldrops; i++) {
  raindrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.5
  });
}

function drawingtherain() {
  requestAnimationFrame(drawingtherain); 
  brush.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < raindrops.length; i++) {
    const drop = raindrops[i];
    brush.beginPath();
    brush.strokeStyle = `rgba(173, 216, 230, ${drop.opacity})`;
    brush.lineWidth = 1;
    brush.moveTo(drop.x, drop.y);
    brush.lineTo(drop.x, drop.y + drop.length); 
    brush.stroke(); 
    
    drop.y += drop.speed; 
    if (drop.y > canvas.height) { 
      drop.y = -drop.length; 
      drop.x = Math.random() * canvas.width;
    }
  }
}
drawingtherain();