baby_status="";
alarm="";
object=[];
function preload(){
alarm= loadSound("alert_alarm.wav");   
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}

function modelLoaded(){
console.log("modelLoaded");

}

  
if(object.length==person){
  document.getElementById("baby_status").innerHTML="BABY DETECTED";
       }
   else{
    document.getElementById("baby_status").innerHTML="BABY NOT DETECTED";
    alarm.play();
   }