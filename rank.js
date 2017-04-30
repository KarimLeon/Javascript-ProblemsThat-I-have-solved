function processData(input) {
    var array = [], arr1 = [], array2 = []

 for(var i = 2; i < input.length; i++) {
      array.push(input[i]);

};
for(var i = 0; i < array.length; i++)  {
     if(array[i] != '\n')
         arr1.push(array[i]);
};


console.log(arr1);



}