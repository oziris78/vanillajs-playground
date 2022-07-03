
const removeSideAnimation = () => {
    document.querySelector("#sidebar").style.animation = "sideBarClose 1.5s ease-in-out 1 forwards";
};
const addSideAnimation = () => {
    document.querySelector("#sidebar").style.animation = "sideBarOpen 1.5s ease-in-out 1 forwards";
};

var isSideOpen = false;

document.addEventListener("DOMContentLoaded", ()=>{

    document.querySelectorAll("a").forEach( (link) => {link.href = "javascript:void(0)";} );

    removeSideAnimation();

    document.querySelector("#openSideBar").onclick = () => {
        if(!isSideOpen){addSideAnimation();}
        else{removeSideAnimation();}
        isSideOpen = !isSideOpen;
    };
    
});