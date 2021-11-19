Webcam.set ({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot() {
    Webcam.snap( function (data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src =" + data_uri + ">";

    });
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sbcwAOziE/model.json", modelLoaded());


//end of project 2 

function check() {
    image = document.getElementById("captured_image");
    classifier.classify(image, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        console.log(confidence);
        document.getElementById("result1").innerHTML = results[0].label + results[0].confidence;
        document.getElementById("result2").innerHTML = results[1].label + results[1].confidence;
        prediciton1 = results[0].label;
        prediction2 = results[1].label;
        speak(); 
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is " + prediction1;
    speak_data2 = "And the second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}