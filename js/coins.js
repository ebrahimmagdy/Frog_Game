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
    cleanCoins(600, 600);
    for(let i = 0; i < coinsNumber; i++){
        coinsArray.push(new Coin(dimentionArray[i]));
    }
}

function handelCoins()
{
    //coinsArray.push(new Coin())
    for(let i = 0; i < coinsArray.length; i++){
        draw(coinsArray[i]);
    }
    
    //coinsNumber++

    // if(coinsNumber===5)
    // {
    //     cleanCoins(coinCanvas.width,coinCanvas.height)
    //     coinsArray=[]
    //     coinsNumber=0

    // }
    
    for (let i = 0; i < coinsArray.length; i++) {
        if (collision(frogger, coinsArray[i])) 
        {
            console.log("Hit coin ");

            score++;
            var xPois=coinsArray[i].width+coinsArray[i].x
            var yPois=coinsArray[i].height+coinsArray[i].y
            cleanCoins(xPois,yPois)
            coinsArray.splice(i,1);
            coinsNumber--;
        }
            
    }
    

}

function cleanCoins(x,y)
{
    ctxCoin.clearRect(0, 0,x, y)
    console.log("cleanCoinsCoins");
}
createCoins();
let coinsInterval = setInterval(createCoins, 5000);






