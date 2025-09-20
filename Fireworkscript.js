const canvas = document.getElementById("canvas");
const brush = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
 const fireworks=[];
 const number = 400;
 const colors = ['red','yellow','blue','green','pink','orange'];
 const particles = [];
 const particlenum = 20;
 for(let i =0;i<number;i++){
   fireworks.push({
    x:Math.random()*canvas.width,
    y:canvas.height,
    tg : y+ (Math.random()*(canvas.height-y)),
    speed: Math.random()*30 + 10,
    color: colors[(Math.floor(Math.random()*7))],
    exploded : false
 })}
 for(let i=0;i<particlenum;i++){
    particles.push({
        x:,
        y:,
        dx:,
        dy:,
        opacity:,
        color : 
    })
 }
 function animation({
    brush.clearRect(0,0,canvas.width,canvas.height);
    for(let i =0;i<fireworks.length;i++){
        while(y!=tg){
            y-=speed;
        }
       brush.beginPath();
       brush.arc(x,tg)
    }
 })