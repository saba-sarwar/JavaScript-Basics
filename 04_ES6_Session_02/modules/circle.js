class Circle
{
    constructor(radius)
    {
        this.radius = radius;
    }
    
  // area method
    areaCircle() 
    {
        return Math.PI * this.radius * this.radius;
    };
}

var c = new Circle(3);
console.log("Area of circle is : " , c.areaCircle());

