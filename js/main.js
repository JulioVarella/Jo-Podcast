$('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000
});


document.addEventListener("DOMContentLoaded", function () { startplayer(); }, false);
var player;
var count = 0;
var aud = document.getElementById('music_player');

/*function counter() {
    if (aud.ended) {
        count++;
        document.getElementById("count").innerHTML = count;
        aud.ended = false;
    }
}*/

function startplayer() {
    player = document.getElementById('music_player');
    player.controls = false;
}

function play_aud() {
    if(aud.ended){
        count++;
        document.getElementById("count").innerHTML = count;
    }
    player.play();
    player.controls = false;
}
function pause_aud() {
    player.pause();
}
function stop_aud() {
    player.pause();
    player.currentTime = 0;
}
function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}