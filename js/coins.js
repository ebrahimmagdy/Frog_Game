const coinCanvas = document.getElementById('coinCanvas');
const ctxCoin = coinCanvas.getContext('2d');
coinCanvas.width = 600;
coinCanvas.height = 600;
coinsArray=[];
var count=0;

const mycoin = new Image();
mycoin.src = "../images/coin.png"


class Coin{
    constructor(y)
    {
        this.x = Math.floor((Math.random()*(coinCanvas.width-60))+10);
        this.y = y;
        this.width=50;
        this.height=50;
     
    
    }
    
    
}
function draw(coinObj)
{
    ctxCoin.drawImage(mycoin,coinObj.x,coinObj.y,coinObj.width,coinObj.height);
    
}

function createCoins() {
    coinsArray = [];
    clean(600, 600);
    for(let i = 0; i < 5; i++){
        coinsArray.push(new Coin(dimentionArray[i]));
    }
}

function handelCoins()
{
    //coinsArray.push(new Coin())
    for(let i = 0; i < coinsArray.length; i++){
        draw(coinsArray[i]);
    }
    
    //count++

    // if(count===5)
    // {
    //     clean(coinCanvas.width,coinCanvas.height)
    //     coinsArray=[]
    //     count=0

    // }
    
    for (let i = 0; i < coinsArray.length; i++) {
        if (collision(frogger, coinsArray[i])) 
        {
            console.log("Hit coin ");

            score++;
            var xPois=coinsArray[i].width+coinsArray[i].x
            var yPois=coinsArray[i].height+coinsArray[i].y
            clean(xPois,yPois)
            coinsArray.splice(i,1);
            //count--;
        }
            
    }
    

}

function clean(x,y)
{
    ctxCoin.clearRect(0, 0,x, y)
    console.log("clean");
    

}
setInterval(createCoins, 5000);






