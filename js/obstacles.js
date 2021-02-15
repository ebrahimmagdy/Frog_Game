class Obstacle {
    constructor(x, y, width, height, direction, type, speed) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.type = type;
        this.speed = speed;
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
        this.x += this.direction * this.speed;
        if (this.direction > 0) {
            if (this.x > canvasObs.width) {
                this.x = 0 - this.width;
            }
        } else {
            if (this.x + this.width < 0) {
                this.x = canvasObs.width;
            }
        }
    }
}

function fillObstacles(arr, type, y, direction, speed){
    for (let i = 0; i < 2; i++) {
        let x = (i * (canvasObs.width / 2) + 50) + (Math.random() * ((canvasObs.width / 2) - 160));
        arr.push(new Obstacle(x, y, 160, 60, direction, type, speed));

    }
}
createObstaclesObjLevel0();
function createObstaclesObjLevel0() {
    for(let i = 0; i < 5; i++){
        fillObstacles(logsArray, waterArray[i], dimentionArray[i], direction[i], gameSpeed);
    }
}
function createObstaclesObjLevel1() {
    for(let i = 0; i < 5; i++){
        fillObstacles(carsArray, landArray[i], dimentionArray[i], direction[i], gameSpeed);
    }
}

function createObstaclesObjLevel2() {
    fillObstacles(logsArrayN, waterArray[1], dimentionArray[0], direction[1], gameSpeed + 1);
    fillObstacles(logsArrayN, waterArray[0], dimentionArray[1], direction[0], gameSpeed - 4);
    fillObstacles(carsArrayN, landArray[1], dimentionArray[2], direction[1], gameSpeed + 4);
    carsArrayN.pop();
    fillObstacles(carsArrayN, landArray[0], dimentionArray[3], direction[0], gameSpeed - 2);
    fillObstacles(carsArrayN, landArray[1], dimentionArray[4], direction[1], gameSpeed - 4);
}

function handleObstacle() {
    if(gameLevels==0){
        for (let i = 0; i < logsArray.length; i++) {
            logsArray[i].update();
            logsArray[i].draw();
        }
    }
    else if(gameLevels==1){
        topImg.src="../images/sand.jpg";
        centerImg.src="../images/level2.png";
        bottomImg.src="../images/grass.jpg";
        for (let i = 0; i < carsArray.length; i++) {
            carsArray[i].update();
            carsArray[i].draw();
        }
    }
    else if(gameLevels==2){
        topImg.src="../images/sand.jpg";
        centerImg.src="../images/level3.png";
        bottomImg.src="../images/grass.jpg";
        for (let i = 0; i < carsArrayN.length; i++) {
            carsArrayN[i].update();
            carsArrayN[i].draw();
            
        }
        for (let i = 0; i < logsArrayN.length; i++) {
            logsArrayN[i].update();
            logsArrayN[i].draw();
        }
    }

    if(gameLevels==0){
      
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
                ctx4.drawImage(collisions, 0, 0, 100, 100, frogger.x - 25, frogger.y - 25, 100, 100);
                freeze = true;
                setTimeout(function(){resetGame();}, 500);
            }
    
        }
    }
    else if(gameLevels==1){

        for (let i = 0; i < carsArray.length; i++) {
            if (collision(frogger, carsArray[i])) {
                console.log("collision here");
                ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 70, 70)
                freeze = true;
                setTimeout(function(){resetGame();}, 500);
            }
        }
    }
    else if(gameLevels==2){
        if (frogger.y < 250 && frogger.y > 100) {
            safe = false;
    
            for (let i = 0; i < logsArrayN.length; i++) {
                if (collision(frogger, logsArrayN[i])) {
                    safe = true;
    
                    if (frogger.x > 0 && frogger.x + frogger.width < canvasObs.width) {
                        frogger.x += logsArrayN[i].direction;
                    }
    
                }
            }
            if (!safe) {
                
                ctx4.drawImage(collisions, 0, 0, 100, 100, frogger.x, frogger.y, 100, 100);
                freeze = true;
                setTimeout(function(){resetGame();}, 500);
            }
    
        }
        for (let i = 0; i < carsArrayN.length; i++) {
            if (collision(frogger, carsArrayN[i])) {
                console.log("collision here");
                ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 70, 70)
                freeze = true;
                setTimeout(function(){resetGame();}, 500);
            }
        }

    }
   

}



