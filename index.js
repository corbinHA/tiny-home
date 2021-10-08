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
    appTitle.style.fontSize = "112px"
    appTitle.style.color = "#2ED9EB"
    if (selectedApp === 'art') {
        cleanUp();
        appTitle.style.color = "#FF66FF"
        appTitle.style.fontFamily = "'Fleur De Leah', cursive";
        appTitle.style.fontSize = "200px"
        generateArt();
    } else if (selectedApp === 'game') {
        cleanUp();
        appTitle.style.color = "#f73600"
        appTitle.style.fontFamily = "'Press Start 2P', cursive";
        appTitle.style.fontSize = "80px"
        generateGame();
    } else if (selectedApp === 'grave') {
        cleanUp();
        appTitle.style.color = "#f00000"
        appTitle.style.fontWeight = "800"
        appTitle.style.fontSize = "200px"
        appTitle.style.fontFamily = "'Amatic SC', cursive";
    } else {
        appTitle.style.fontFamily = "'Audiowide', 'cursive'";
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
    setDisplay();
    apps[0] === 'grave' ? toggleDark() : toggleLight();
}

const rotateLeft= () => {
    apps.unshift(apps.pop())
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