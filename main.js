LeftWristX=0;
RightWristX=0;
difference=0;


function setup(){
    video=createCapture(VIDEO);
    video.size( 500, 400 );

    canvas=createCanvas(450,400);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#d3d3d3');

    document.getElementById("text_size").innerHTML="WIDTH AND HIEGHT OF THE SQUARE WILL BE = " + difference + "px";

    textSize(difference);
    fill('#90093');
    text('BHAVYA',150,250);
}

function modelLoaded(){
console.log('POSENET IS INITIALISING');
}

function gotPoses(results){
if(results.length > 0){
    
   console.log(results); 
 LeftWristX=results[0].pose.leftWrist.x;
 RightWristX=results[0].pose.rightWrist.x;

 difference=floor(LeftWristX-RightWristX);
}
}