class BlueBlock extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.color = "blue";
    //this.image = loadImage("sprites/wood1.png");
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    //strokeWeight(2);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
