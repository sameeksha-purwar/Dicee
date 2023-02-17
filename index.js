var randomNumber= Math.floor(Math.random()*6)+1
var randomNumberImg="images/"+"dice" + randomNumber + ".png"

var image= document.querySelectorAll('img')[0];
image.setAttribute("src",randomNumberImg)

var randomNumber1= Math.floor(Math.random()*6)+1
var randomNumberImg1="images/"+"dice" + randomNumber1 + ".png"

var image1= document.querySelectorAll('img')[1];
image1.setAttribute("src",randomNumberImg1)



if (randomNumber>randomNumber1){
        document.querySelector('h1').innerHTML="Player 1 Win"
}
else if (randomNumber<randomNumber1){
    document.querySelector('h1').innerHTML="Player 2 Win"
}
else{
    document.querySelector('h1').innerHTML="Draw"
}


