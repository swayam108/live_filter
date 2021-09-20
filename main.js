noseX=0;
noseY=0;

function preload() {
 nnp = loadImage('hat_with_beard.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-68;
    noseY = results[0].pose.nose.y-100;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(nnp, noseX, noseY, 130, 180);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
function f1(){
  nnp= loadImage('hat_with_beard.png');
}
function f2(){
  nnp= loadImage('hat_with_beard2.png');
}
function f3(){
  nnp= loadImage('hat_with_beard3.png');
}
function f4(){
  nnp= loadImage('hat_with_beard4.png');
}