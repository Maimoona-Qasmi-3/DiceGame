var randomNumbers = Math.floor(Math.random()*6)+1;
var randomImages = "images/dice"+randomNumbers+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImages);

var randomNumbers2 = Math.floor(Math.random()*6)+1;
var randomImages = "images/dice"+randomNumbers2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImages);

if(randomNumbers>randomNumbers2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins"
} else if(randomNumbers<randomNumbers2){
  document.querySelector("h1").innerHTML  ="Player 2 Wins🚩"
}else{
  document.querySelector("h1").innerHTML="Oops...Draw!"
}
