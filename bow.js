class Bow{
    constructor(x,y,w,h){
        this.angle = angle
        var options = {
            isStatic:true
        }

        this.w = w;
        this.h = h;
       
        this.bow= loadImage("assets/bow.png")
        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.body)

        Matter.Body.setAngle(this.body, -PI/2)
      
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(angle);
        if(keyIsDown(LEFT_ARROW) &&  angle > -1.1907963267948962){
            angle -= 0.01;
            Matter.Body.setAngle(this.body, angle)
        }

        if(keyIsDown(RIGHT_ARROW) && angle < 1.3192036732051056){
            angle += 0.01;
            Matter.Body.setAngle(this.body, angle)
       }
      
        push ()
        translate (pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image (this.bow, 0,0,this.w,this.h)
        pop ()
       
       
    }
   

    

}


