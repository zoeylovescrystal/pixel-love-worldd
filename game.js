const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const loadingScreen = document.getElementById("loadingScreen");
const startButton = document.getElementById("startButton");

let started = false;

const player = {
    x: 500,
    y: 500,
    size: 32,
    speed: 4
};

const keys = {};

document.addEventListener("keydown",(e)=>{
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup",(e)=>{
    keys[e.key.toLowerCase()] = false;
});

startButton.onclick = ()=>{
    loadingScreen.style.display="none";
    started=true;
};

function movePlayer(){

    if(keys["arrowup"]||keys["w"])
        player.y-=player.speed;

    if(keys["arrowdown"]||keys["s"])
        player.y+=player.speed;

    if(keys["arrowleft"]||keys["a"])
        player.x-=player.speed;

    if(keys["arrowright"]||keys["d"])
        player.x+=player.speed;
}

function drawSky(){

    ctx.fillStyle="#bfeeff";
    ctx.fillRect(0,0,canvas.width,canvas.height);

}

function drawGround(){

    const camX = player.x-canvas.width/2;
    const camY = player.y-canvas.height/2;

    for(let x=0;x<80;x++){

        for(let y=0;y<80;y++){

            ctx.fillStyle=((x+y)%2==0)
            ?"#dff8d8"
            :"#d7f4cf";

            ctx.fillRect(
                x*64-camX,
                y*64-camY,
                64,
                64
            );

        }

    }

}

function drawPlayer(){

    ctx.fillStyle="#ff7eb8";

    ctx.beginPath();

    ctx.arc(
        canvas.width/2,
        canvas.height/2,
        player.size/2,
        0,
        Math.PI*2
    );

    ctx.fill();

    ctx.fillStyle="white";

    ctx.beginPath();
    ctx.arc(canvas.width/2-5,canvas.height/2-3,2,0,Math.PI*2);
    ctx.arc(canvas.width/2+5,canvas.height/2-3,2,0,Math.PI*2);
    ctx.fill();

}function drawFlowers(){

for(const flower of flowers){

const x=flower.x-camera.x;
const y=flower.y-camera.y;

ctx.font="28px serif";
ctx.fillText("🌸",x,y);

}

}

function drawAnimals(){

for(const animal of animals){

const x=animal.x-camera.x;
const y=animal.y-camera.y;

ctx.font="34px serif";
ctx.fillText(animal.type,x,y);

}

}

function gameLoop(){

    if(started){

        movePlayer();

        drawSky();

        drawGround();

        drawPlayer();

    }

    requestAnimationFrame(gameLoop);

}

gameLoop();

window.onresize=()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

};
