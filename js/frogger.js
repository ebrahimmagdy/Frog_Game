class Frogger
{
    constructor()
    {
        this.spriteWidth =250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }

    update()
    {
        if(keys[38]) //up
        {
            if(this.moving === false)
            {
                this.y -= grid;
                this.moving = true;
                this.frameX = 1;
                this.frameY = 0;
            }
        }

        if(keys[40]) //down
        {
            if(this.moving === false && this.y < canvas.height - this.height * 2)
            {
                this.y += grid;
                this.moving = true;
                this.frameY = 3;
            }
        }

        if(keys[37]) //left
        {
            if(this.moving === false && this.x > this.width)
            {
                this.x -= grid;
                this.moving = true;
                this.frameY = 2;
            }
        }

        if(keys[39]) //rigth
        {
            if(this.moving === false && this.x < canvas.width - this.width * 2)
            {
                this.x += grid;
                this.moving = true;
                this.frameY = 1;
            }
        }

        if(this.y < 0){
            scored();
        } 

    }

    draw()
    {
        ctx3.fillStyle = 'green';
        // ctx3.fillRect(this.x, this.y, this.width, this.height);
        ctx3.drawImage(froggerSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
            this.spriteWidth, this.spriteHeight, this.x - 50, this.y - 50, this.width * 3, this.height * 3)
    }

    jump()
    {
        if(this.moving === false)
        {
            this.frameX = 1;
        }
        else if(this.frameX === 1)
        {
            this.frameX = 0;
        }
    }
}

const frogger = new Frogger();