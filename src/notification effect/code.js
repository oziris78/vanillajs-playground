

document.addEventListener('DOMContentLoaded', () => {

    const addNotification = () => {
        const notifArea = document.getElementById("notifArea");
    
        if(notifArea.childNodes.length <= 7){
            // creating the divs
            let newNotif = document.createElement("div");
            newNotif.classList.add("notif");

            let insideNewNotif = document.createElement("div");
            insideNewNotif.classList.add("insideNotif");
            insideNewNotif.innerHTML = "Hey this is a notification";
            newNotif.appendChild(insideNewNotif);

            // adding the divs and deleting them in 2.5 secs
            notifArea.insertBefore(newNotif, notifArea.childNodes[0]);
            setTimeout( () => newNotif.remove() , 2500);
        }
    };

    document.querySelector("button").onclick = () => addNotification();
    
});