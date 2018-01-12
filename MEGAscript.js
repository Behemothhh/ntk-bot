document.body.innerHTML =
'<style>' +
    '#site {' +
        'background-color: #fff !important;' +
        'position: absolute;' +
        'top: -2px;' +
        'left: 0;' +
        'width: 100%;' +
        'height: 98vh;' + 
    '}' +
    '#baza {' +
        'background-color: #fff !important;' +
        'position: absolute;' +
        'opacity: 0;' +
        'z-index: 9999;' +
        'width: 500px;' +
        'height: 300px;' +
        'bottom: 0' +
    '}' +
'</style>' +
'<iframe src="https://exam1.urfu.ru" id="site"></iframe>' +
'<iframe src="https://ntknet.herokuapp.com/baza" id="baza"></iframe>';

const baza = document.getElementById('baza');
let pressed = {};

document.getElementById('site').contentWindow.document.addEventListener('keydown', (event) => {
    pressed[event.code] = true;
    if (pressed['AltLeft'] && pressed['KeyZ']) {
        baza.style.opacity = 1;
        baza.style.zIndex = 9999;
    }
});

document.getElementById('site').contentWindow.document.addEventListener('keyup', (event) => {
    delete pressed[event.code];
    baza.style.opacity = 0;
    baza.style.zIndex = -1;
});