function setup(){
canvas=createCanvas(350,350);
canvas.position(620,200);


}
img="";
function preload(){
    img=loadImage("dog_cat.jpg");

}

function draw(){
image(img,0,0,350,350);
fill("red");
strokeWeight(3);
rect(100,100,100,100);
rect(200,500,100,100);

}