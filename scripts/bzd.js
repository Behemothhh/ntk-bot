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
    '#settings {' +
        'background-color: #fff !important;' +
        'position: absolute;' +
        'opacity: 0;' +
        'z-index: -2;' +
        'bottom: 0;' +
        'right: 0;' +
    '}' +
'</style>' +
'<iframe src="https://exam1.urfu.ru" id="site"></iframe>' +
'<div id="settings">' +
    '<input type="number" id="width" value="500" placeholder="Width" step="10">' +
    '<input type="number" id="height" value="300" placeholder="Height" step="10">' +
    '<input type="number" id="bottom" value="0" placeholder="Bottom" step="5">' +
    '<input type="number" id="left" value="0" placeholder="Left" step="5">' +
'</div>' +
'<iframe src="https://ntknet.herokuapp.com/baza/bzd1.htm" id="baza"></iframe>';

const baza = document.getElementById('baza');
let pressed = {};
let a = Object.assign({}, document.getElementById('site').contentWindow);
let switcher = true;

document.getElementById('site').addEventListener('load', () => {
    document.getElementById('site').contentWindow.document.addEventListener('keydown', (event) => {
        pressed[event.code] = true;
        if (pressed['AltLeft'] && pressed['KeyZ']) {
            console.log('press on site');
            baza.style.opacity = 1;
            baza.style.zIndex = 9999;
        }
        if (pressed['AltLeft'] && pressed['KeyX']) {
            toggleSettings();
            delete pressed['AltLeft'];
            delete pressed['KeyX'];
        }
    });
    
    document.getElementById('site').contentWindow.document.addEventListener('keyup', (event) => {
        baza.style.opacity = 0;
        baza.style.zIndex = -1;
        delete pressed[event.code];
    });

    [].slice.call(document.getElementById('settings').children).forEach((child) => {
        console.log('added');
        child.addEventListener('change', (e) => {
            console.log(e);
            document.getElementById('baza').style[e.target.id] = e.target.value + 'px';
        });
    });

});

function toggleSettings() {
    if (switcher) {
        let s = document.getElementById('settings');
        s.style.zIndex = 99999;
        s.style.opacity = 1;
        switcher = false;
    } else {
        let s = document.getElementById('settings');
        s.style.zIndex = -2;
        s.style.opacity = 0;
        switcher = true;
    }
}