const apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'art',
    'grave'
];

const display = document.getElementById('display');
const appTitle = document.getElementById('app-name');
const options = document.getElementById('options');

const cleanUp = () => {
    display.innerHTML = '';
}

const setDisplay = () => {
    let selectedApp = apps[0]
    appTitle.innerHTML = selectedApp;
    appTitle.style.color = "#2ED9EB"
    if (selectedApp === 'art') {
        cleanUp();
        generateArt();
    } else if (selectedApp === 'game') {
        cleanUp();
        generateGame();
    } else {
        cleanUp();
    }
}

const toggleDark = () => {
    document.body.style.backgroundColor = '#000000'
    document.body.style.color = '#FFFFFF'
    appsName.style.color = 'red'
}

const toggleLight = () => {
    document.body.style.backgroundColor = ' #FFFFFF'
    document.body.style.color = '#000000'
    appsName.style.color = 'red'
}

const rotateRight= () => {
    apps.push(apps.shift())
    // appName.innerText = apps[0]
    setDisplay();
    apps[0] === 'grave' ? toggleDark() : toggleLight();
}

const rotateLeft= () => {
    apps.unshift(apps.pop())
    // appName.innerText = apps[0]
    setDisplay();
    apps[0] === 'grave' ? toggleDark() : toggleLight();
}

const keyDown = e => {
        switch(e.keyCode) {
            case(39):
                rotateRight()
                break;
            case(37):
                rotateLeft()
                break;
        }
    }

document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;

document.addEventListener('keydown', keyDown);

document.addEventListener('DOMContentLoaded', () => {
    setDisplay();
});