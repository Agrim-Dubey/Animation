const canvas = document.getElementById("snowcanvas");
const brush = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const snowflakes=[];
const flakes = 600;
for(let i=0;i<flakes;i++){
    snowflakes.push({
        x : Math.random()*canvas.width,
        y : Math.random()*canvas.height,
        radius : Math.random()*2,
        speed : Math.random()*1+1,
        drift: Math.random()*1-0.5 
    })
}
function drawingsnow(){
    brush.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<snowflakes.length;i++){
        const flake = snowflakes[i];
        brush.beginPath();
        brush.arc(flake.x,flake.y,flake.radius,0,Math.PI*2,false);
        brush.fillStyle="rgba(255, 255, 255, 1)";
        brush.fill();
        flake.y+=flake.speed;
        flake.x+=flake.drift;
        if(flake.y>canvas.height){
            flake.y= -flake.radius;
            flake.x=Math.random()*canvas.width;
            flake.radius=Math.random()*2;
        }
    }
    requestAnimationFrame(drawingsnow);
}
drawingsnow();