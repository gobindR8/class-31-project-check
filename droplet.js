class droplet{
constructor(x,y,r){
var options={
  isStatic:false,
   restitution:0.1,
   desnity:1,
   friction:1,
   

} 
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)

}
display(){
var pos=this.body.position
var angle=this.body.angle

push()
translate(pos.x,pos.y)
rotate(angle)
strokeWeight(4)
fill(100,0,255)
rectMode(CENTER)
ellipse(0,0,this.r,this.r)
pop()



}








}
var maxDrops=100
for (var i=0; i<maxDrops; i++){
body.push(new body(random(0,400),random(0,400)))



}