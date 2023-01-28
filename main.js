function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RW_DzKuSW/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if ( error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML= "I can hear-" + results[0].label;
        document.getElementById("result_label").style.color= "rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").innerHTML="Accuracy-" + (results[0].confidence*100).toFixed(2);
        document.getElementById("result_confidence").style.color= "rgb("+r+","+g+","+b+")";

        img=document.getElementById('a1');
        img1=document.getElementById('a2');
        img2=document.getElementById('a3');
        img3=document.getElementById('a4');

        if (results[0].label=="Barking") {
            img.src="Dog.jpeg";
            img1.src="oscar.png";
            img2.src="Unteger.jpeg";
            img3.src="download.jpeg";
        }  else if (results[0].label=="Meowing") {
            img.src="pyung.png";
            img1.src="Cat.jpeg";
            img2.src="Unteger.jpeg";
            img3.src="download.jpeg";
        }  else if (results[0].lael=="Roaring") {
            img.src="pyung.png";
            img1.src="oscar.png";
            img2.src="Lion.jpeg";
            img3.src="download.jpeg";
        } else {
            img.src="pyung.png";
            img1.src="oscar.png";
            img2.src="Unteger.jpeg";
            img3.src="download.jpeg";
        }

    }
}
