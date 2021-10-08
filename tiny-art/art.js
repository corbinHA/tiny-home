let generateArt = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'art';
    canvas.height = '500';
    canvas.width = '500';
    canvas.style.border = '4px solid #FF66FF';
    canvas.style.background = 'black';

    const context = canvas.getContext("2d");

    for (let x = 0; x < 255; x++) {
        for ( let y = 0; y < 255; y++) {
            if ((x * y ) % 255) {
                context.fillRect(x*((x ^ y) % 919 ), y*((x ^ y) % 517), x - y, y);
                context.fillStyle = `rgb(${(x * y % 255)}, ${y}, ${x})`
            };
        };
    };

    const display = document.getElementById('display')
    display.append(canvas)

};
