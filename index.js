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
    // if (selectedApp === 'art') {
    //     cleanUp();
    //     appTitle.style.color = "#FF66FF";
    //     appTitle.style.fontFamily = "'Fleur De Leah', cursive";
    //     appTitle.style.fontSize = "200px";
    //     generateArt();
    // } else if (selectedApp === 'game') {
    //     cleanUp();
    //     appTitle.style.color = "#f73600";
    //     appTitle.style.fontFamily = "'Press Start 2P', cursive";
    //     appTitle.style.fontSize = "80px";
    //     generateGame();
    // } else if (selectedApp === 'grave') {
    //     cleanUp();
    //     appTitle.style.color = "#f00000";
    //     appTitle.style.fontWeight = "800";
    //     appTitle.style.fontSize = "200px";
    //     appTitle.style.fontFamily = "'Amatic SC', cursive";
    // } else {
    //     appTitle.style.fontFamily = "'Audiowide', 'cursive'";
    //     cleanUp();
    // }
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