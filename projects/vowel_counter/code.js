

document.addEventListener('DOMContentLoaded', () => {

    const vowels = ["a","e","ı","i","o","ö","u","ü", "â", "ê", "î", "î", "ô", "û"];

    const textarea = document.getElementById("area");
    const div = document.querySelector("div");

    textarea.addEventListener('keyup', () => {
        let vowelCount = 0;
        
        let content = String(textarea.value);
        for(let i = 0; i < content.length; i++){
            if( vowels.includes(content.charAt(i).toLocaleLowerCase())) 
                vowelCount++;
        }

        div.innerHTML = "Vowel count: " + vowelCount;
    });

});