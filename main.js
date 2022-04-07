var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content); 
    speak();
}
function speak()
{
   var synth = window.speechSynthesis;
   var speakData = document.getElementById("textbox").value;
   var utterThis = new SpeechSynthesisUtterance(speakData);
   synth.speak(utterThis);
   Webcam.attach(camera);

   setTimeout(function()
   {
    takeSnapShot();
    save();
   }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_qualitiy:100
});

function takeSnapShot()
{
   Webcam.snap(function(pic)
   {
       document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+pic+'"/>';
   }); 
}

function save()
{
    link =  document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}