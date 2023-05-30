//Controles de Video
console.log("linkeado");

const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $progress = document.querySelector('#progress');
$pause.hidden = true;

//Adelantar y Atrasar 5 segundos
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);


function handlePlay() {
    console.log("le diste click al boton de play");
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    console.log("le diste click al boton de pause");
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

function handleBackward() {
    console.log("le diste click al boton de backward");
    $video.currentTime -= 5;
}

function handleForward() {
    console.log("le diste click al boton de forward");
    $video.currentTime += 5;
}



