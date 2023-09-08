let spirals = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240);
}

function draw() {
    background(240);

    for (let i = 0; i < spirals.length; i++) {
        spirals[i].update();
        spirals[i].display();
    }
}

function mouseClicked() {
    let x = mouseX;
    let y = mouseY;
    let s = new Spiral(x, y);
    spirals.push(s);
}

class Spiral {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.spacing = 5;
    }

    update() {
        this.angle += 0.1;
    }

    display() {
        for (let r = 0; r < 100; r += this.spacing) {
            let x1 = this.x + r * cos(this.angle);
            let y1 = this.y + r * sin(this.angle);

            let alpha = map(r, 0, 100, 255, 0);

            fill(0, alpha);
            noStroke();
            ellipse(x1, y1, 10, 10);
        }
    }
}
