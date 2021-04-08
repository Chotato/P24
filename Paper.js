class Paper extends BaseClass{
    constructor(x, y){
        super(x, y, 30, 30);
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    }
    display(){
        var pos =this.body.position;
        fill("green");
        circle(pos.x, pos.y, this.width, this.height);
      }
}
 