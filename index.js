var  randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-dice6

var randomImageSource ="images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2= "images/dice"+ randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}else{
  document.querySelector("h1").innerHTML="Draw!🤷‍♀️";
}
