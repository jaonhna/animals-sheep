function si(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GgGMTBKNZ/model.json', modelReady)

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
   if(error){
    console.log("gotResults");
   }
   else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("is").innerHTML = 'I can hear -'+ results[0].label;
    document.getElementById("a").innerHTML = 'Accuracy -'+ (results[0].confidence*100).toFixed(3)+ "%";
    document.getElementById("is").style.color = "rgb( " + random_number_r + "," +random_number_g + "," + random_number_b + ")";
    document.getElementById("a").style.color = "rgb( " + random_number_r + "," +random_number_g + "," + random_number_b + ")";

    img1 = document.getElementById('dog');
    img2 = document.getElementById('cat');
    img3 = document.getElementById('sheep');
    img3 = document.getElementById('pony');
    

    if (results[0].label == "dog"){
        img1.src = '01.gif';
        img2.src =  '2.png';
        img3.src = '3.png';
        img4.src = '4.png';
    }
    if (results[0].label == "cat"){
        img1.src = '1.png';
        img2.src =  '02.gif';
        img3.src = '3.png';
        img4.src = '4.png';
    }
    if (results[0].label == "sheep"){
        img1.src = '1.png';
        img2.src =  '2.png';
        img3.src = '03.gif';
        img4.src = '4.png';
    }
    if (results[0].label == "pony"){
        img1.src = '1.png';
        img2.src =  '2.png';
        img3.src = '3.png';
        img4.src = '04.gif';
    }

    
}


}


