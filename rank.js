function processData(input) {
    var array = [], arr1 = []

 for(var i = 2; i < input.length; i++) {
      array.push(input[i]);

};


for(var b = 0; b < array.length; b++) {
         if(array[b] != '\n') 
            arr1.push(array[b]);
        else
            arr1.push([array[b]])


        

}

console.log(arr1);
};