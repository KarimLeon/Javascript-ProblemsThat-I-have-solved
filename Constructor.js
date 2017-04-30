function Vector(x, y) {
  this.x = x,
  this.y = y 
}; 

Vector.prototype.plus = function(x, y) {
     var x = this.x + this.y;
     return new Vector(1, 2);
};
      

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5