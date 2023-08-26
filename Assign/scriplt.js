document.addEventListener("DOMContentLoaded", function () {
    const musicInput = document.getElementById("musicInput");
    const musicPlayer = document.getElementById("musicPlayer");

    musicInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        const fileURL = URL.createObjectURL(file);
        musicPlayer.src = fileURL;
        musicPlayer.play();
    });
});
