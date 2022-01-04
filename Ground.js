class Ground{
    constructor(x,y,w,h){
        var Option = {
            isStatic: true
        }
        this.body= Bodies.rectangle(x,y,w,h,Option)
        World.add(world,this.body)
        this.w = w
        this.h = h
    }
    display(){
        var groundPos = this.body.position
        push()
        translate(groundPos.x , groundPos.y)
        rect(0,0,this.w,this.h)
        pop()
    }
}