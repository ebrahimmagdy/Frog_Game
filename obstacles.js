const canvasObs=document.getElementById("canvasObstacle");
const canvasObstacle=canvasObs.getContext("2d");
canvasObs.width=600;
canvasObs.height=600;
carsArray=[]
grid=80;

class Obstacle{
    constructor(x,y,width,height,speed,type){

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=speed;
        this.type=type;
    }
    draw()
    {
        canvasObstacle.fillStyle="blue"
        canvasObstacle.fillRect(this.x,this.y,this.width,this.height)

    }
    printHello() {
        document.write("hello");
        console.log("hello");
    }
    move()
    {
        setInterval(function(){
        
        if (this.x<600) {
            // document.write("hello")
            this.x+=300;
            
        }     
        else{
            this.x=0-80;
            
        }

        }, 3000);
    }
    
}
function createObstaclesObj() {
    for (let i = 0; i <1; i++){
        let x=i*300;
        carsArray.push(new Obstacle(x,100,160,80,1,"car"));

    }

    // for (let i = 0; i <2; i++){
    //     let x=i*300;
    //     carsArray.push(new Obstacle(x,200,160,80,1,"car"));

    // }
    // for (let i = 0; i <2; i++){
    //     let x=i*300;
    //     carsArray.push(new Obstacle(x,300,160,80,1,"car"));

    // }
    // for (let i = 0; i <2; i++){
    //     let x=i*300;
    //     carsArray.push(new Obstacle(x,400,160,80,1,"car"));

    // }
    
}
createObstaclesObj();

// for (let i = 0; i < carsArray.length; i++) {
    // carsArray[i].draw()
    setInterval(function(){
        carsArray[1].draw()

        carsArray[1].move()
        canvasObstacle.clearRect(0,0,600,600)
        carsArray[1].draw()
    

        }, 3000);
    
    
    
    // carsArray[i].draw()


    
    
// }