function startClassification() {
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/sSxX9C0uP/model.json",modelReady);
}
function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()* 255)+1;
        random_number_b = Math.floor(Math.random()* 255)+1;
        
        document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("result_accurancy").innerHTML = 'Accurancy -'+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+ random_number_r +"," + random_number_g +","+random_number_b+")";
        document.getElementById("result_accurancy").style.color = "rgb("+ random_number_r +"," + random_number_g +","+random_number_b + ")"
        img = document.getElementById("gif");
        dog = 0;
        cat =0;
        whale = 0;
        if (results[0].label == "dog") {
          img.src = "dog.gif";
          dog = dog+1;  
          document.getElementById("1").innerHTML = "dog count =" + dog
        } else if(results[0].label == "whale") {
            img.src = "giphy.gif";
            whale = whale+1;
            document.getElementById("2").innerHTML = "whale count =" + whale 
        } else if (results[0].label == "cat") {
            img.src = "cat.webp";
            cat = cat+1;
            document.getElementById("3").innerHTML = "cat count =" + cat
        } else {
            img.src = "water.gif";
        } 
         }
}