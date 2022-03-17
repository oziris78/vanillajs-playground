

/* VARIABLES */

var photoNumber = 11;

const imgSrc = ["./images/photo0.png", "./images/photo1.png", "./images/ikili.png",
"./images/photo2.png", "./images/photo3.png", "./images/photo4.png", "./images/photo5.png",
"./images/photo6.jpg", "./images/photo7.jpg", "./images/photo8.jpg", "./images/photo9.jpg"];




/* FUNCTIONS */

const setMarginForFooter = () => {
    // automaticly moves the footer according to the number of photos
    const marginAmount = ( ( Math.ceil(photoNumber / 4) - 1 ) * 10 ) + 5;
    document.getElementById("galleryGrid").style.margin = "0 5% " + marginAmount + "% 5%"; 
};

const setUpImages = () => {
    const grid = document.getElementById("galleryGrid");
    for(let i=0; i < photoNumber; i++){
        let image = document.createElement("img");
        image.draggable = false;
        image.alt = "photo" + i;
        image.src = imgSrc[i];
        grid.children[i].appendChild(image);
    }
};

const closeImg = (imageDiv) => {
    document.querySelectorAll(".imgWindow").forEach( (img) => {img.remove();} );
};

const addListenersToImages = () => {
    document.querySelectorAll("main div img").forEach( (image) => {
        image.addEventListener("mouseover", () => {
            image.parentElement.style.transition = "1s";
            image.parentElement.style.padding = "2.5%";
            image.parentElement.style.filter = "brightness(55%)";
        });
        image.addEventListener("mouseout", () => {
            image.parentElement.style.padding = "2%";
            image.parentElement.style.filter = "brightness(100%)";
        });
        image.addEventListener("click", () => {
            /* the div */
            let imageDiv = document.createElement("div");
            imageDiv.style.visibility = "hidden";
            imageDiv.classList.add("imgWindow");
            imageDiv.onclick = (imageDiv) => closeImg(imageDiv);
            /* the img inside div */
            let newImg = document.createElement('img');
            newImg.src = image.src;
            newImg.style.setProperty("pointer-events", "none");
            /* add them to the body */
            imageDiv.appendChild(newImg);
            document.body.appendChild(imageDiv);
            imageDiv.style.visibility = "visible";
        });
    });
};




/* DOM CODE */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("#nav2 a, footer a").forEach( (elem) => {elem.draggable = false;} );
    setUpImages();
    addListenersToImages();
    setMarginForFooter();
});