const appList = Object.values(apps)

const display = document.getElementById('display');
const appTitle = document.getElementById('app-name');
const options = document.getElementById('options');

const cleanUp = () => {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#000000';
    display.innerHTML = '';
}

const render = appName => {
    cleanUp();
    switch(appName) {
        case('game'):
            return generateGame();
        case('math'):
            return generateMath();
        case('note'):
            return generateNote();
        case('art'):
            return generateArt();
        case('grave'):
            return generateGrave();
        default:
            return
    }
}

const setDisplay = () => {
    let selectedApp = appList[0];
    appTitle.innerHTML = selectedApp.name;
    appTitle.style.fontSize = selectedApp.fontSize;
    appTitle.style.color = selectedApp.color;
    appTitle.style.fontFamily = selectedApp.fontFamily
    render(selectedApp.name);
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
    appList.push(appList.shift())
    setDisplay();
    appList[0].name === 'grave' ? toggleDark() : toggleLight();
}

const rotateLeft= () => {
    appList.unshift(appList.pop())
    setDisplay();
    appList[0].name === 'grave' ? toggleDark() : toggleLight();
}

const keyDown = e => {
        switch(e.keyCode) {
            case(39):
                rotateRight()
                break;
            case(37):
                rotateLeft()
                break;
            default:
                break;
        }
    }

document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;

document.addEventListener('keydown', keyDown);

document.addEventListener('DOMContentLoaded', () => {
    setDisplay();
});