noseX="";
noseY="";
leftWrist="";
rightWrist="";
difference="";

function setup(){
    camera = createCapture(VIDEO);
    camera.size(450,500);
    
        canvas = createCanvas(600,500);
        canvas.center();
    addModel = ml5.poseNet(camera, modelLoaded);
    addModel.on('pose', gotposes);
    }
    
    function modelLoaded(){
        console.log("Model loaded!!!!!!");
    }
    
    function gotposes(results){
    if(results.length > 0){
        console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWrist=results[0].pose.leftWrist.x;
rightWrist=results[0].pose.rightWrist.x;
console.log("Nose x= "+noseX+" Nose y= "+noseY);
console.log("Left wrist= "+leftWrist+" Right wrist= "+rightWrist);
difference=Math.floor(leftWrist-rightWrist);
    }    
    }
    
    function draw(){
        background("skyblue");
        fill("green");
        textSize(difference);
        text("Aayush",noseX,noseY);
        document.getElementById("Font").innerHTML="Font size of the text will be "+difference+" px";
    }