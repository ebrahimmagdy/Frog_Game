function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height); //car collesion
    ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
    canvasObstacle.clearRect(0, 0, canvasObs.width, canvasObs.height);

    handelCoins();

    // handleRipples();
    handleParticles();
    handleObstacle();
    // handelCoins()
    





    if(!freeze){
        frogger.draw();
        frogger.update();
    }
    

    handleScoreBoard();

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown', function(e) {
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        frogger.jump();
    }
});

window.addEventListener('keyup', function(e) {
    delete keys[e.keyCode];
    frogger.moving = false;
    frogger.frameX = 0;
});

function scored() {
    gameLevels++;
    gameSpeed += 2.5;
    if(gameLevels == 1){
        createObstaclesObjLevel1();
    }else if(gameLevels == 2){
        createObstaclesObjLevel2();
    } 
    lastScore = score;
    coinsNumber = 5;
    createCoins();
    frogger.x = canvas.width / 2 - frogger.width / 2;
    frogger.y = canvas.height - frogger.height - 40;

    if(gameLevels===3){
        location.href = 'congrats.html'; 
    }
}

function handleScoreBoard() {
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px verdana';
    ctx4.strokeText('Level', 500, 15);
    ctx4.font = '60px verdana';
    ctx4.strokeText(gameLevels+1, 500, 65);
    
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px verdana';
    ctx4.strokeText('Score', 50, 15);
    ctx4.font = '60px verdana';
    ctx4.strokeText(score, 50, 65);
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
    // if(gameLevels==0){
    //     score = 0;
    // }
    // gameSpeed = 1;
    coinsNumber = 5;
    createCoins();
    // if(score>0)
    // {
    //     score--;
    // }
    // else{
    //     score=0;
    // }
    score = lastScore;
    collisionsCount++;
    freeze = false;
}
