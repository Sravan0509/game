class Arrow{
    constructor(x,y,w,h, angle){
        this.image = loadImage("assets/arrow.png")
       
        var options = {isStatic : true}
        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.body)
        this.w=w;
        this.h=h;
        this.angle = angle;
        this.velocity= p5.Vector.fromAngle(angle)
    }

    show(){
        Matter.Body.setAngle(this.body,this.angle)
        var angle = this.body.angle;
        var pos = this.body.position;
        
        push ()
        translate (pos.x, pos.y)
        rotate(angle)
        imageMode (CENTER)
        image(this.image, 0, 0, this.w, this.h)
        pop ()
    
    }

    
    shoot(angle){
        
        this.velocity =  p5.Vector.fromAngle(angle+PI/2);
        this.velocity.mult(55);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
          x: this.velocity.x, y: this.velocity.y});
    }
}