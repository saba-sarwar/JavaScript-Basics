class Rectangle
{
    constructor(length, breadth)
    {
        this.length = length;
        this.breadth = breadth;
    }
    
  // area method
    areaRectangle() 
    {
        return this.length * this.breadth;
    };
}

var r = new Rectangle(10,15);
console.log("Area of rectangle is : " , r.areaRectangle());