 //for loop factorial

    let fact = 1;
    let n = 5;
    for(i=1; i<=n; i++){
        fact = fact * i;
    }
    console.log(fact)


 //factors of a number

    let number = 12;
    for(i=1; i<=number; i++){
        if(number%i===0){
            console.log(i)
        }
    }


//strong number

    //145 = 1! + 4! + 5! => then its a strong number

    let num = 145;
    let total = 0;
    let copy = n
    while(num>0){
        let remainder = num%10;
         let fact1 = 1;
         for(i=1; i<=remainder; i++){
            fact1 = fact1 * i;
         }
        num = Math.floor(num/10);
        total = total + fact;
        
    }
    
   console.log(copy==num ? "Strong" : "Not Strong")
