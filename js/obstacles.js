const canvasObs=document.getElementById("canvasObstacle");
const canvasObstacle=canvasObs.getContext("2d");
canvasObs.width=600;
canvasObs.height=600;
carsArray=[]
logsArray=[]
grid=80;
gameSpeed=1
var safe=false;


turtleImg= document.getElementById("turtleImg");
wood= document.getElementById("wood");

redCar= document.getElementById("redCar");
truckCar= document.getElementById("truckCar");
yellowCar=document.getElementById("yellowCar");
// var Cararr=[redCar,truckCar,yellowCar];
// function getCarImg(Cararr){
//     var index=Math.floor(Math.random()*Cararr.length);
//     return Cararr[index];
// }

class Obstacle{
    constructor(x,y,width,height,direction,type){

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.direction=direction;
        this.type=type;
    }
    draw()
    {
        if(this.type=="turtle"){
            canvasObstacle.drawImage(turtleImg,this.x,this.y,this.width,this.height)
        }
        else if(this.type=="wood"){
            canvasObstacle.drawImage(wood,this.x,this.y,this.width,this.height)

        }
        else if(this.type=="redCar"){
            canvasObstacle.drawImage(redCar,this.x,this.y,this.width,this.height)

        }
        else if(this.type=="truckCar"){
            canvasObstacle.drawImage(truckCar,this.x,this.y,this.width,this.height)

        }
       

    }
    update(){
        this.x +=this.direction * gameSpeed;
        if(this.direction >0){
            if(this.x > canvasObs.width){
                this.x= 0 - canvasObs.width;
            }
        }
        else{
            if(this.x < 0-canvasObs.width){
                this.x= canvasObs.width;
            }
        }
    }
  
    
}
function createObstaclesObj() {
    for (let i = 0; i <2; i++){
        let x=i*400;
        logsArray.push(new Obstacle(x,105,160,60,-1,"turtle"));

    }
    for (let i = 0; i <2; i++){
        let x=i*400;
        logsArray.push(new Obstacle(x,180,160,60,1,"wood"));

    }

    for (let i = 0; i <2; i++){
        let x=i*300;
        carsArray.push(new Obstacle(x,270,160,60,1,"redCar"));

    }
    for (let i = 0; i <2; i++){
        let x=i*400;
        carsArray.push(new Obstacle(x,345,160,60,-1,"truckCar"));

    }
 
    for (let i = 0; i <2; i++){
        let x=i*400;
        carsArray.push(new Obstacle(x,420,160,60,1,"redCar"));

    }
   
    
}
createObstaclesObj();
console.log(logsArray[0]);

function handleObstacle(){
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].update();
        carsArray[i].draw();       
    }
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();       
    }

    if(frogger.y <250 && frogger.y >100){
        // frogger.draw();


        for (let i = 0; i < logsArray.length; i++) {
            console.log("outside");
            if(collision(frogger,logsArray[i])){
                console.log("inside condistion");
                frogger.x +=logsArray[i].direction ;
                safe=true;
                console.log(safe);
                // frogger.update();
                // frogger.draw();

            }            
        }
        if(!safe){
            console.log("inside not safe");
            for (let index = 0; index < 30; index++) {
                ripplesArray.unshift(new Particle(frogger.x , frogger.y));                 
            }
            resetGame();
        }

    }

}
function collision(first,second){
    return!(first.x > second.x +second.width ||
            first.x+first.width < second.x ||
            first.y>second.y+second.height ||
            first.y+first.height<second.y
            );
}

function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score=0;
    gameSpeed=1;
    collisionsCount++;

}


// function animate(){
//     canvasObstacle.clearRect(0,0,canvasObs.width,canvasObs.height);
//     handleObstacle();
//     requestAnimationFrame(animate);
// }
    
// animate();

    