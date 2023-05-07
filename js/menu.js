let continueGame = document.querySelector('#continue');
let quitGame = document.querySelector('#quit');

function openQuit() {
    if (continueGame) {
        window.location.href = '../src/menu.html';
    }
    window.close();
}

let loopPlay = document.querySelector('background-music');
while (loopPlay) {
    
}