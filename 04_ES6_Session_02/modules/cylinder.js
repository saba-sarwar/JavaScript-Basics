class Cylinder
{
    constructor(radius, height)
    {
        this.radius = radius;
        this.height = height;
    }
    
  // area method
    areaCylinder() 
    {
        return (2*Math.PI*this.height * this.radius)+(2*Math.PI*this.radius * this.radius);
    };
}

var l = new Cylinder(3,4);
console.log("Area of cylinder is : " , l.areaCylinder());