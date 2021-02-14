class Particle {
    constructor(x, y){
        this.x = x + 25;
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    draw(){
        ctx3.fillStyle = 'rgba(150, 150, 150, ' + this.opacity + ')';
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx3.fill();
        ctx3.closePath();
    }
    update(){
        this.x += this.directionX;
        this.y += this.directionY;
        if(this.opacity > 0.1){
            this.opacity -= 0.9;
        }
        if(this.radius > 0.15){
            this.radius -= 0.14;
        }
    }
    drawRipple(){
    //    ctx3.fillStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx3.strokeStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';
        ctx3.stroke();
        ctx3.closePath();
    }
    ripple(){
        if(this.radius < 100){
            this.radius += .5;
            //this.x -= 0.03;
            //this.y -= 0.03;
        }
        if(this.opacity > 0){
            this.opacity -= 0.01;
        }
    }
}

function walkingOnLand(){
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    if(particlesArray.length > maxParticles){
        for(let i = 0; i < 30; i++){
            particlesArray.pop();
        }
    }
    if((keys[37] || keys[38] || keys[39] || keys[40])){
        for(let i = 0; i < 10; i++){
            particlesArray.unshift(new Particle(frogger.x, frogger.y));
        }       
    }
}

function walkingOnWater(){
    for(let i = 0; i < ripplesArray.length; i++){
        ripplesArray[i].ripple();
        ripplesArray[i].drawRipple();
    }
    if(ripplesArray.length > 10){
        for(let i = 0; i < 5; i++){
            ripplesArray.pop();
        }
    }
    if((keys[37] || keys[38] || keys[39] || keys[40])){
        for(let i = 0; i < 2; i++){
            ripplesArray.unshift(new Particle(frogger.x, frogger.y));
        }       
    } 
}

function handleParticles() {
    if(frogger.y > 500 || frogger.y < 100 || gameLevels == 1){
        walkingOnLand();
    }else if(gameLevels == 2){
        if(frogger.y > 250){
            walkingOnLand();
        }
    }else{
        particlesArray = [];
    }
}


function handleRipples() {
    if(gameLevels == 0 && frogger.y < 500 && frogger.y > 100){
        walkingOnWater();
    }else if(gameLevels == 2){
        if(frogger.y < 250 && frogger.y > 100){
            walkingOnWater();  
        }
    }else{
        ripplesArray = [];
    }   
}