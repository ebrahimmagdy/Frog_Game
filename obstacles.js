const canvasObs=document.getElementById("canvasObstacle");
const canvasObstacle=canvasObs.getContext("2d");
canvasObs.width=600;
canvasObs.height=600;
carsArray=[]
grid=80;
gameSpeed=1


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
        this.x +=this.direction *15;
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
        carsArray.push(new Obstacle(x,105,160,60,-1,"turtle"));

    }
    for (let i = 0; i <2; i++){
        let x=i*350;
        carsArray.push(new Obstacle(x,180,160,60,1,"wood"));

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

function handleObstacle(){
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].update();
        carsArray[i].draw();       
    }
}

function animate(){
    canvasObstacle.clearRect(0,0,canvasObs.width,canvasObs.height);
    handleObstacle();
    requestAnimationFrame(animate);
}
    
animate();

    