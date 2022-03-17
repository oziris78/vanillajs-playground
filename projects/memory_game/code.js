

// rand value in range [0,n] 
const ranNum = (n) => parseInt( Math.floor( Math.random() * (n+1) ) );

// how many times does n exist in the array
const countInArray = (array, what) => {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === what) {count++;}
    }
    return count;
}


var imagesTagIDS = []; // string [0,1,2,3,4,5,6,7]
var imageCardIDS = []; // number [0, 1, 1, 3, 3, 2, 2, 0]

var isClicked = false;
var idNum = 0;

var clickedIndex;
var clickedCardValue;

const ses = new Audio("./images/click.mp3");
ses.volume = 0.25;

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll("div").forEach((etiket) => {
        etiket.className += " noDrag" // CSS icin
    });

    document.querySelectorAll("div img").forEach((img) => {
        img.src = "./images/bosKart.png";
        img.className += " noDrag" // CSS icin
        img.id = idNum.toString();
        idNum++;

        imagesTagIDS.push(img.id.toString());
        if(imageCardIDS.length === 0) {imageCardIDS.push( ranNum( (document.querySelectorAll("div img").length / 2)-1 ) );}
        else{
            while(true){
                var i = ranNum( (document.querySelectorAll("div img").length / 2)-1 );
                if(imageCardIDS.indexOf(i) !== -1){ // eger icinde var ise
                    if(countInArray(imageCardIDS, i) === 1) { // ikinci ise eklenebilir
                        imageCardIDS.push(i);
                        break;
                    }
                    else{ // ikinci degilse eklenmemeli
                        continue;
                    }
                }
                else{ // icinde yok ise dogrudan eklenebilir
                    imageCardIDS.push(i);
                    break;
                }
            }
        }

    });

    
    document.querySelectorAll("img").forEach((img) => {

        img.onclick = () => {
            ses.play();
            console.log("test")

            if(!isClicked){
                clickedIndex = parseInt(img.id);
                clickedCardValue = imageCardIDS[clickedIndex];
                img.src = "./images/kart" + clickedCardValue.toString() + ".png";
            }
            else{
                img.src = "./images/kart" + clickedCardValue.toString() + ".png";
                if(clickedCardValue === imageCardIDS[parseInt(img.id)] && img.id !== imagesTagIDS[clickedIndex]){
                    document.getElementById(imagesTagIDS[clickedIndex]).onclick = null;
                    img.onclick = null;
                }
                else{
                    document.getElementById(imagesTagIDS[clickedIndex]).src = "./images/bosKart.png";
                    img.src = "./images/bosKart.png";
                }
                clickedIndex = parseInt(img.id);
                clickedCardValue = imageCardIDS[clickedIndex];
            }
            isClicked = !isClicked;    
        }

    });
    
    



});