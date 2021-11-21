leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function draw()
{
   
}

function setup()
{
 video = createCapture(VIDEO);
video.size(560,400);
video.position(0,200);
Canvas=createCanvas(560,400);
Canvas.position(560,200);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposeses)
}
function gotposeses(result)
{if (result.length > 0) 
    {console.log(result)
    leftwristx=result[0].pose.leftWrist.x 
    leftwristy=result[0].pose.leftWrist.y
    rightwristx=result[0].pose.rightWrist.x 
    rightwristy=result[0].pose.rightWrist.y
    }
   
}
function modelLoaded()
{
   console.log("modelLoaded YAY")
}

function preload()
{
   
}