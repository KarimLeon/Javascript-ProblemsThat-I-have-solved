function processData(input) {
   var array = []
  for(var i = 0; i < input.length; i++) {
        array.push(input[i])

}

 console.log(array)
     
} 
//Sample Input
/* 
  4         
aba
baba
aba
xzxb
3
aba
xzxb
ab   

*/      

//Sample Output:2 , 1 , 0 

    
/* There are N strings. Each String's length is no more than 20 characters.
   There are also Q queries. For each query, you are given a string, and you need to find out how many times this string 
   occurred    previously.
     
