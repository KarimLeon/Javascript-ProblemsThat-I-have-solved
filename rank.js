function processData(input) {
    var array = [], arr1 = [], array2 = []

 for(var i = 2; i < input.length; i++) {
      array.push(input[i]);

};

for(var i = 0; i < array.length; i++) {
     array2.push(array[i]);

     if(array2[i] != '\n') 
            arr1.push(array2[i]);
     else 
          break;
      
     
}

console.log(arr1);

};