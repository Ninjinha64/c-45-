var mario,marioImg;
var Nuvens;
var tubo,tuboImg;
var goomba,goombaImg;
var koopa,koopaImg;


function preload (){
marioImg = loadImage("./assets/Mario.gif");
tuboImg = loadImage("./assets/Tubo.png");
goombaImg = loadImage("./assets/goomba.gif");
koopaImg = loadImage("./assets/koopa.gif");

}

function setup (){
createCanvas(windowWidth,windowHeight);
mario = createSprite(50,height-40,20,50);
tubo = createSprite(50,height-40,20,50); //observação eu não troquei os valores porque eu não sabia oq fazer
goomba = createSprite(50,height-40,20,50);//observação eu peguei algumas imagems da internet e compilei elas juntas formando os gifs que eu add 
koopaImg = createSprite(50,height-40,20,50);

}

function draw (){
background("purple");
drawSprites ( );

}