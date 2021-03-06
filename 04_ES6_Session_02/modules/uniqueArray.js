var array = ["Lizzie", "Kai", "Josie", "Hope", "Landon", "Landon", "Josie", "Hope", "Lizzie"]; 
          
var outputArray = []; 
    
let removeusingSet = (arr) => 
{ 
    let outputArray = Array.from(new Set(arr)) 
    return outputArray 
}

console.log(removeusingSet(array));