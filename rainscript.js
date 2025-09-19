const canvas = document.getElementById("raincanvas");
const brush = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
const raindrops=[];

class drop {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.length = Math.random() * 20 + 10;
    this.speed = Math.random() * 4 + 4;
  }

  fall() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -this.length;
      this.x = Math.random() * canvas.width;
    }
  }

draw(){
    brush.beginPath();
    brush.strokeStyle="rgba(223, 223, 231, 0.6)";
    brush.moveTo(this.x,this.y);
    brush.lineTo(this.x,this.y+this.length);
    brush.stroke();
}}
for(let i=0;i<500;i++){
    raindrops.push(new drop());
}
function animation(){
    requestAnimationFrame(animation);
    brush.clearRect(0,0,canvas.width,canvas.height);
    raindrops.forEach(drop=>{
        drop.fall();
        drop.draw();
    });
}
animation();