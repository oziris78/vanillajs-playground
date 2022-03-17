
var arrOfDivs = document.getElementsByClassName("box");


for(let i = 0; i< arrOfDivs.length; i++){
    let elem = arrOfDivs[i];
    elem.addEventListener("mouseover", e => {
        let r = Math.floor(Math.random()*256).toString();
        let g = Math.floor(Math.random()*256).toString();
        let b = Math.floor(Math.random()*256).toString();
        elem.style.backgroundColor = "#" + parseInt(r+g+b, "0x").toString();
    }, false);
}