lipX=0;
lipY=0;
function preload()
{
    moustache= loadImage('https://i.postimg.cc/fk4RhMSV/6666666565.png');
}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();

    poseNet=ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);
}
function modelReady()
{
    console.log("PoseNet Ready!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("lips x= "+results[0].pose.nose.x);
        console.log("lips y= "+results[0].pose.nose.y);
        lipX=results[0].pose.nose.x-30;
        lipY=results[0].pose.nose.y-10;
    }
}
function draw()
{
    image(video, 0, 0, 640, 480);
    image(moustache, lipX, lipY, 70, 50);
}
function take_snapshot()
{
    save('mypic.png');
}