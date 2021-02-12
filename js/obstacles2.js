
const canvasObs = document.getElementById("canvasObstacle");
const canvasObstacle = canvasObs.getContext("2d");
canvasObs.width = 600;
canvasObs.height = 600;
carsArray = []
logsArray = []
grid = 80;
gameSpeed = 1
var safe = false;
var gameLevels=0;

turtleImg = document.getElementById("turtleImg");
wood = document.getElementById("wood");

redCar = document.getElementById("redCar");
truckCar = document.getElementById("truckCar");
yellowCar = document.getElementById("yellowCar");



wrapperImg=document.getElementById("wrapper");
topImg=document.getElementById("topImg");
bottomImg=document.getElementById("bottomImg");






class Obstacle2 {
    constructor(x, y, width, height, direction, type) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.type = type;
    }
    draw() {
        if (this.type == "turtle") {
            canvasObstacle.drawImage(turtleImg, this.x, this.y, this.width, this.height)
        } else if (this.type == "wood") {
            canvasObstacle.drawImage(wood, this.x, this.y, this.width, this.height)

        } else if (this.type == "redCar") {
            canvasObstacle.drawImage(redCar, this.x, this.y, this.width, this.height)

        } else if (this.type == "truckCar") {
            canvasObstacle.drawImage(truckCar, this.x, this.y, this.width, this.height)

        }


    }
    update() {
        this.x += this.direction * gameSpeed;
        if (this.direction > 0) {
            if (this.x > canvasObs.width) {
                this.x = 0 - canvasObs.width;
            }
        } else {
            if (this.x < 0 - canvasObs.width) {
                this.x = canvasObs.width;
            }
        }
    }


}

function createObstaclesObjLevel0() {
    for (let i = 0; i < 2; i++) {
        let x = i * 600;
        logsArray.push(new Obstacle2(x, 105, 160, 60, 1, "wood"));

    }
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        logsArray.push(new Obstacle2(x, 180, 160, 60, -1, "turtle"));

    }

    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        logsArray.push(new Obstacle2(x, 270, 160, 60, 1, "wood"));

    }
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        logsArray.push(new Obstacle2(x, 345, 160, 60, -1, "turtle"));

    }

    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        logsArray.push(new Obstacle2(x, 420, 160, 60, 1, "wood"));

    }


}
createObstaclesObj();


function createObstaclesObj() {
    for (let i = 0; i < 2; i++) {
        let x = i * 600;
        carsArray.push(new Obstacle2(x, 105, 160, 60, 1, "redCar"));

    }
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        carsArray.push(new Obstacle2(x, 180, 160, 60, -1, "truckCar"));

    }

    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        carsArray.push(new Obstacle2(x, 270, 160, 60, 1, "redCar"));

    }
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        carsArray.push(new Obstacle2(x, 345, 160, 60, -1, "truckCar"));

    }

    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        carsArray.push(new Obstacle2(x, 420, 160, 60, 1, "redCar"));

    }


}















function handleObstacle2() {
   

    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].update();
        carsArray[i].draw();
    }
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();
    }
    //car collision
    // for (let i = 0; i < carsArray.length; i++) {
    //     if (collision(frogger, carsArray[i])) {
    //         console.log("collision here");
    //         ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 70, 70)
    //         resetGame();
    //     }
    // }
//250 100
    if (frogger.y < 500 && frogger.y > 50) {
        safe = false;

        for (let i = 0; i < logsArray.length; i++) {
            if (collision(frogger, logsArray[i])) {
                safe = true;

                if (frogger.x > 0 && frogger.x + frogger.width < canvasObs.width) {
                    frogger.x += logsArray[i].direction;

                }

            }
        }
        if (!safe) {
            
            ctx4.drawImage(collisions, 0, 0, 100, 100, frogger.x, frogger.y, 100, 100);

            resetGame();
        }

    }

}

function collision(first, second) {
    return !(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y
    );
}

function resetGame() {
    frogger.x = canvas.width / 2 - frogger.width / 2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    gameSpeed = 1;
    collisionsCount++;
}


