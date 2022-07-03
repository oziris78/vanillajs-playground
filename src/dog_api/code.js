
/*
Demo created by Oğuzhan Topaloğlu
*/

document.addEventListener('DOMContentLoaded', ()=>{

    // gets dog images' links from the dog API
    const fetchDogs = async () => {        
        const res1 = await fetch('https://dog.ceo/api/breed/shiba/images/random');
        const data1 = await res1.json();
        return data1;
    };

    // puts the dog images on the screen
    document.getElementById('btn1').onclick = () => {
        const dogDiv = document.getElementById('dogDiv');
        const dogDivImages = dogDiv.querySelectorAll('img');
        if(dogDivImages) dogDivImages.forEach( (img) => dogDiv.removeChild(img) )
        const img = document.createElement('img');
        fetchDogs()
        .then( data => {
            img.src = data.message;
            img.width = 400;
            dogDiv.appendChild(img);
        })
        .catch( err => console.log(err) );
    } ;

});
