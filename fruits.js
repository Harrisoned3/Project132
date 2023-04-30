img="";
status1="";
function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("fruitsStatus").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
console.log("Model Loaded!");
status1 = true;
objectDetector.detect(img,gotresult);
}
function preload(){
img=loadImage("Banana.jpg");
}
function gotresult(error,results){
if (error){
console.log(error);
}
console.log(results);
}
function preload(){
img=loadImage("dog_cat.jpg");
}
function draw(){
image(img,0,0,640,420);
}