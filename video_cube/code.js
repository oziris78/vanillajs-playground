

var videoCount = 1;

document.addEventListener('DOMContentLoaded', () => {

    const vid = document.querySelector("video");
    vid.volume = 0.5;
    vid.muted = false;

    vid.onended = () => {
        if(0 <= videoCount && videoCount <= 2)
            document.querySelectorAll("video").forEach( (vid) => vid.src = "./vids/vid" + (videoCount+1) + ".mp4" );
        videoCount++;
    }

});