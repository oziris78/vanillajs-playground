

document.addEventListener("DOMContentLoaded", ()=>{

    const loadInfo = () => {
        var allStorageItems = [],
        keys = Object.keys(localStorage), key;

        for (let i = 0; key = keys[i]; i++) {
            allStorageItems.push( key + '@£#>$½{{[]}' + localStorage.getItem(key));
        }
        
        
        allStorageItems.forEach( (dizgi) => {
            dizgi = dizgi.substring(dizgi.indexOf("@£#>$½{{[]}") + "@£#>$½{{[]}".length, dizgi.length);
            let eklenecekDiv = createDiv(dizgi);
            const ulEtiketi = document.querySelector("#main ul");
            ulEtiketi.insertBefore(eklenecekDiv, ulEtiketi.firstChild);
        } );
        
    }

    const addListeners = (btn) => btn.addEventListener("click", () => {

        let content = btn.parentElement.firstChild.innerHTML;

        for(let i = 0; i < localStorage.length; i++){
            let key = Object.keys(localStorage)[i];
            if(localStorage.getItem(key) === content){
                localStorage.removeItem(key);
                break;
            }
        }
        
        btn.parentElement.remove();
        document.getElementsByTagName("textarea")[0].focus();
        
    });

    const createDiv = function (content) {
        let eklenecekDiv = document.createElement("DIV");
        eklenecekDiv.className = "flexed";
        let eklenecekLi = document.createElement("LI");
        eklenecekLi.innerHTML = content;
        let eklenecekButton = document.createElement("BUTTON");
        eklenecekButton.className = "delete";
        eklenecekButton.innerHTML = "Delete";
        addListeners(eklenecekButton);
        eklenecekDiv.appendChild(eklenecekLi);
        eklenecekDiv.appendChild(eklenecekButton);
        return eklenecekDiv;
    };

    loadInfo();
    
    document.getElementById("add").onclick = () => {
        const ta = document.getElementsByTagName("textarea")[0];
        
        const content = ta.value; 
        if(content === "")
            return;

        let eklenecekDiv = createDiv(content);
        const ulEtiketi = document.querySelector("#main ul");
        ulEtiketi.insertBefore(eklenecekDiv, ulEtiketi.firstChild);

        const randName = Math.random().toString(36).substr(2, 5);
        localStorage.setItem(randName, content);
        
        ta.value = "";
        ta.focus();
    };


    document.querySelectorAll(".delete").forEach( (btn) => addListeners(btn) );       

});