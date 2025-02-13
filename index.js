document.addEventListener("DOMContentLoaded", function () {
    const yesSongs = [
        "asset/yes/iloveyou.wav",
        "asset/yes/mahal kita.wav",
        "asset/yes/talaga ba.wav"
    ];
    
    const noSongs = [
        "asset/no/dude.wav",
        "asset/no/kasi.wav",
        "asset/no/why though.wav"
    ];
    
    function playRandomSong(songList) {
        const randomIndex = Math.floor(Math.random() * songList.length);
        const audio = new Audio(songList[randomIndex]);
        audio.play();
    }
    
    document.querySelector("#yes").addEventListener("click", function () {
        playRandomSong(yesSongs);
    });
    
    document.querySelector("#no").addEventListener("click", function () {
        playRandomSong(noSongs);
    });
});
