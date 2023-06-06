//Controles de Video
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
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

function handleBackward() {
    $video.currentTime -= 5;
}

function handleForward() {
    $video.currentTime += 5;
}

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded() {
    $progress.max = $video.duration;
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput);

function handleInput() {
    $video.currentTime = $progress.value;
    
}


