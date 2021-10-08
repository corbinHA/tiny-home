const generateGame = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.height = '500';
    canvas.width = '500';
    canvas.style.border = '5px solid #2ED9EB';
    canvas.style.background = 'black';

    const display = document.getElementById('display');
    display.append(canvas);

    ctx = canvas.getContext('2d');


// intial state
    px = py = 10;
    gs = ts = 20;
    ax = ay = 15;
    xv = yv = 0;

    body = [];  // {x: px, y: py}
    segments = 5;


    // lagic for game
    const game = () => {
        px += xv;
        py += yv;

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#2ED9EB';

        if(px < 0) {
            px = ts - 1;
        };
        if(px > ts -1) {
            px = 0;
        };
        if(py < 0) {
            py = ts -1
        };
        if(py > ts -1) {
            px = 0;
        };


        for(let i = 0; i < body.length; i++) {
            ctx.fillRect(body[i].x * gs, body[i].y * gs, gs - 2 , gs - 2);
            if(body[i].x === px && body[i].y === py) {
                segments = 5;
            };
        };

        body.push({x: px, y: py});

        while(body.length > segments) {
            body.shift();
        };


        // eating
        if(ax === px && ay === py) {
            segments++
            ax = Math.floor(Math.random() * ts);
            ay = Math.floor(Math.random() * ts);

        }
    ;

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);


        document.getElementById('score').innerHTML = `Score: ${segments}`;

    }

    // D-Pad control
    const keyDown = e => {
        switch(e.keyCode) {
            case(65):
                if (xv === 1) break
                xv = -1;
                yv = 0;
                break;
            case(87):
                if (yv === 1) break
                xv = 0;
                yv = -1;
                break;
            case(68):
                if (xv === -1) break
                xv = 1;
                yv = 0;
                break; 
            case(83):
                if (yv === -1) break
                xv = 0;
                yv = 1;
                break;
        }
    }

    
    document.addEventListener('keydown', keyDown);
    setInterval(game, 1000/15); 
}


