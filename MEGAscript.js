document.body.innerHTML =
'<style>' +
    '#site {' +
        'position: absolute;' +
        'top: -2px;' +
        'left: 0;' +
        'width: 100%;' +
        'height: 98vh;' + 
    '}' +
    '#baza {' +
        'position: absolute;' +
        'opacity: 0;' +
        'z-index: 9999;' +
        'width: 150px;' +
        'height: 150px;' +
    '}' +
'</style>' +
'<iframe src="https://exam1.urfu.ru" id="site"/>' +
'<iframe src="https://ntknet.herokuapp.com/baza" id="baza"/>';

const baza = document.getElementById('baza');

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (key === 'Control') {
        baza.style.opacity = 1;
    };
});

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    if (key === 'Control') {
        baza.style.opacity = 0;
    };
});