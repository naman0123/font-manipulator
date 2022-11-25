function preload()
{

}

function setup()
{
    canvas = createCanvas(200, 200);
    canvas.parent("canvas-div");

    video = createCapture(VIDEO);
    video.size(200, 200);
    video.parent("capture");

    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses);
}

function draw()
{
    background(161, 124, 21);
    fill(248, 244, 244);
    textSize(19);
    text("Hello", 100, 100);
}

function modelLoaded(results, err) {
    console.log("Model loaded!");
    alert("Model Loaded!");
}

function gotPoses(results, err)
{
    if(err) {
        console.error(err);
    } else if(results.length > 0) {
        console.log(results);
    }
}
