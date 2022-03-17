

const ranNum = () => ( (Math.random() * 3) + 1 ).toFixed(5);

const createHearts = () => {
    for(let i = 0; i < 98; i++){
        let newElement = document.createElement("div");
        newElement.classList.add("heart");
        newElement.innerHTML = "💜";
        document.body.appendChild(newElement);
    }
};

const setUpHearts = (arrHearts) => {
    for(let i = 0; i < arrHearts.length; i++){
        arrHearts[i].style.left = i + "%";
        arrHearts[i].style.visibility = "hidden";
        
        arrHearts[i].style.animation = "fallAnimation "+ranNum()+"s linear infinite";
        setTimeout(() => {
            arrHearts[i].style.visibility = "visible";
        }, 3000);
    }
};


document.addEventListener('DOMContentLoaded', () => {

    createHearts();

    setUpHearts(document.querySelectorAll(".heart"));

});