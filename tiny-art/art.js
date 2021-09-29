let makeArt = () => {
    const tinyart = document.getElementById('art')
    const context = tinyart.getContext("2d");

    for (let x = 0; x < 255; x++) {
        for ( let y = 0; y < 255; y++) {
            if ((x * y ) % 255) {
                context.fillRect(x*((x ^ y) % 919 ), y*((x ^ y) % 517), x - y, y);
                context.fillStyle = `rgb(${(x * y % 255)}, ${y}, ${x})`
            };
        };
    };

};

document.addEventListener("DOMContentLoaded", makeArt)