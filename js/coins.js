const coinCanvas = document.getElementById('coinCanvas');
const ctxCoin = coinCanvas.getContext('2d');
coinCanvas.width = 600;
coinCanvas.height = 600;
coinsArray=[];
var count=0;

const mycoin = new Image();
mycoin.src = "../images/coin.png"


class Coin{
    constructor()
    {
        this.x=Math.floor((Math.random()*(coinCanvas.width-100))+100);
        this.y=Math.floor((Math.random()*(coinCanvas.height-100))+100);
        this.width=50;
        this.height=50;
     
    
    }
    
    
}
function draw(coinObj)
    {
        ctxCoin.drawImage(mycoin,coinObj.x,coinObj.y,coinObj.width,coinObj.height);
        
    }


function handelCoins()
{
    coinsArray.push(new Coin())
    draw(coinsArray[count])
    count++

    if(count===5)
    {
        clean(coinCanvas.width,coinCanvas.height)
        coinsArray=[]
        count=0

    }
    
    for (let i = 0; i < count; i++) {
        if (collision(frogger, coinsArray[i])) 
        {

            console.log("Hit coin ");

            score++;
            var xPois=coinsArray[i].width+coinsArray[i].x
            var yPois=coinsArray[i].height+coinsArray[i].y
            clean(xPois,yPois)
            coinsArray.splice(i,1);
            count--;
        }
            
    }
    

}

function clean(x,y)
{
    ctxCoin.clearRect(0, 0,x, y)
    console.log("clean");
    

}
setInterval(handelCoins, 1000);






