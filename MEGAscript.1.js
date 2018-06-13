document.body.innerHTML =
'<style>' +
    '#site {' +
        'border: 0;' +
        'background-color: #fff !important;' +
        'position: absolute;' +
        'top: -2px;' +
        'left: 0;' +
        'width: 100%;' +
        'height: 98vh;' + 
    '}' +
    '#baza {' +
        'border: 0;' +
        'background-color: #fff !important;' +
        'position: absolute;' +
        'opacity: 0;' +
        'z-index: -1;' +
        'width: 500px;' +
        'height: 300px;' +
        'bottom: 0' +
    '}' +
    '#helper-move {' +
        'position: absolute;' +
        'z-index: 99999;' +
        'width: 5px;' +
        'height: 5px;' +
        'bottom: 0;' +
    '}' +
    '#helper-size {' +
        'position: absolute;' +
        'z-index: 99999;' +
        'width: 5px;' +
        'height: 5px;' +
        'bottom: 295px;' +
        'left: 495px;' +
    '}' +
'</style>' +
'<iframe src="https://exam1.urfu.ru" id="site"></iframe>' +
'<div id="helper-move" draggable="true"></div>' +
'<div id="helper-size" draggable="true"></div>' +
'<iframe src="https://ntknet.herokuapp.com/baza" id="baza"></iframe>';

const baza = document.getElementById('baza');
let pressed = {};
let a = Object.assign({}, document.getElementById('site').contentWindow);

document.getElementById('site').addEventListener('load', () => {
    document.getElementById('site').contentWindow.document.addEventListener('keydown', (event) => {
        pressed[event.code] = true;
        if (pressed['AltLeft'] && pressed['KeyZ']) {
            console.log('press on site');
            baza.style.opacity = 1;
            baza.style.zIndex = 9999;
        }
    });
    
    document.getElementById('site').contentWindow.document.addEventListener('keyup', (event) => {
        baza.style.opacity = 0;
        baza.style.zIndex = -1;
        delete pressed[event.code];
    });
    document.getElementById('helper-move').addEventListener('mousedown', mouseDownMove);
    document.getElementById('helper-size').addEventListener('mousedown', mouseDownSize);
    document.getElementById('site').contentWindow.document.addEventListener('mouseup', removeEvent);
    document.addEventListener('mouseup', removeEvent);
});

function removeEvent() {
    document.getElementById('helper-move').removeEventListener('mousemove', mouseMove);
    document.getElementById('helper-size').removeEventListener('mousemove', mouseMove);
}

function mouseMove(e) {
    const moveX = e.movementX;
    const moveY = e.movementY;
    console.log(moveX);
    console.log(moveY);
}

function mouseDownMove(e) {
    const positionX = e.x - e.offsetX;
    const positionY = window.innerHeight - e.y - (this.clientHeight - e.offsetY);
    this.addEventListener('mousemove', mouseMove);
}

function mouseDownSize(e) {
    const positionX = e.x + (this.clientWidth - e.offsetX);
    const positionY = window.innerHeight - e.y + e.offsetY;
    this.addEventListener('mousemove', mouseMove);
}