noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#E6E6FA');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(differnce);
    fill('#c5ebc0');
    text('Heidi', 50, 400);
    

}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+noseX +"noseY = "+noseY)
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.leftWrist.x;
    difference = leftWristX - rightWristX;
    difference = floor(leftWristX - rightWristX);

    console.log(leftWristX + leftWristX+"rightWristX = "+rightWristX+"difference = " + difference);
}
}

