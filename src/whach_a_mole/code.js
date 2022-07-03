
const emptyImage = (img) => { img.src = "./images/emptySlot.png"; };
const fillImage = (img) => { img.src = "./images/mole.png"; };
const emptyAllImages = () => document.querySelectorAll("img").forEach( (img) => emptyImage(img) );
const ranNum = () => Math.floor( Math.random() * 9 ) ; // 0,1,...,8 random number
const ranImg = () => document.querySelectorAll("img")[ ranNum() ]; // arr[0], ... , arr[8] random image

const getTime = () => document.querySelector("#leftTime").textContent.substring(6);
const setTime = (timeLeft) => document.querySelector("#leftTime").textContent = "Time: " + timeLeft;

const getScore = () => document.querySelector("#score").textContent.slice(-1);
const setScore = (curScore) => document.querySelector("#score").textContent = "Your score: " + curScore;

var isFirstTime = true;
var timeLeft = 5;
var curScore = 0;
var idOfInterval;

document.addEventListener('DOMContentLoaded', () => {

    emptyAllImages();

    document.querySelector("button").onclick = () => {

        idOfInterval = setInterval(() => {
            setTime(timeLeft);

            emptyAllImages();
            fillImage(ranImg());

            if( parseInt(getTime()) === 0){
                emptyAllImages();
                document.querySelectorAll("img").forEach( (img) => {img.onclick = null;});
                document.querySelector("#leftTime").textContent = "Game Over!";
                document.querySelector("#score").style.color = "red";
                clearInterval(idOfInterval);

                const btnElem = document.querySelector("button");
                btnElem.style.display = "inline";
                btnElem.innerHTML = "RESTART";
                btnElem.onclick = null;
                btnElem.onclick = () => location.reload();
            }

            if(isFirstTime){
                isFirstTime = !isFirstTime;

                document.querySelectorAll("img").forEach( (img) => {
                    img.onclick = () => {
                        if(img.src.match('emptySlot.png') === null){ 
                            curScore++; setScore(curScore);
                        }
                    };
                });
            }
            timeLeft--;

        }, 1000);

        document.querySelector("button").onclick = null;
        document.querySelector("button").style.display = "none";
    };


});