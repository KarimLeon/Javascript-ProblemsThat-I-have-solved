
var size = 8; y = "", b = " #"
 for(var x = 0; x < size; x++) { 
 for(var i = 0; i < size; i++) {
         if(i % x)
            y += " #";
         else 
            y+= '\n'
};
 };

console.log(y);