function Factorial(number) {
    if(number == 0) 
	    return 'Done'; 
	else if(number < 0)
	    return "Too Low";
		else 
	   return  Factorial(number - 1) 
		}; 
		
		console.log(Factorial(-10)); 
		
		
    