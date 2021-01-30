
  class Stone{
    constructor(x, y,r, angle) {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x, y, r, options);

        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      
   

      display(){
        push();
        var stonePos=this.body.position;	   
        translate(stonePos.x,stonePos.y);
        var angle=this.body.angle;
        rotate(angle);
        fill("white")
        imageMode(CENTER);
      //  ellipseMode(CENTER);

        image(this.image, 0, 0, 40, 40);
        pop();
      }
}