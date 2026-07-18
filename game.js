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

       drawFlowers();
        
        drawAnimals();
              function drawTrees(){

for(const tree of trees){

const x=tree.x-camera.x;
const y=tree.y-camera.y;

ctx.font="48px serif";
ctx.fillText("🌳",x,y);

}

}  
        drawLetters();

        drawPlayer();
        
       checkLetters(); 

    }

    requestAnimationFrame(gameLoop);

}let foundLetters = [];

function checkLetters(){

for(let i=0;i<letters.length;i++){

const letter=letters[i];

const dx=player.x-letter.x;
const dy=player.y-letter.y;

const distance=Math.sqrt(dx*dx+dy*dy);

if(distance<45 && !foundLetters.includes(i)){

foundLetters.push(i);

document.getElementById("letterCount").textContent=foundLetters.length;

document.getElementById("letterText").textContent=letter.text;

document.getElementById("popup").classList.remove("hidden");

}

}

}

document.getElementById("closeLetter").onclick=()=>{

document.getElementById("popup").classList.add("hidden");

};

gameLoop();

window.onresize=()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

};
function drawLetters(){

for(const letter of letters){

ctx.font="28px serif";
ctx.fillText("💌",letter.x-camera.x,letter.y-camera.y);

}

function drawLetters(){

for(const letter of letters){

ctx.font="28px serif";
ctx.fillText("💌",letter.x-camera.x,letter.y-camera.y);

}

}
