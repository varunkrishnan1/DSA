let a = 10;
let b = 10;
console.log(a + b + "sum of two nums "); // 20

console.log("sum of two nums " + a + b); // 1010

console.log("sum of two nums " + (a + b)); //20

//This is called type coersion

//if we are converting from one datatype to another one then its called - type casting 


//If we need to take values from user , use prompt("whats your name")

let age = Number(prompt("What is your age"))
console.log(age)


//swapping two numbers in 3 methods

//1 st method - extra variable
    let a1 = 10;
    let b1 = 20;
    let c;

     c = a1;
     a1 = b1;
     b1 = c;

     console.log(a1,b1);
    
//2nd method - use maths , without extra variable
    let a2 = 10;
    let b2 = 20;

    a2 = a2 + b2; //30
    b2 = a2 - b2; //10
    a2 = a2 - b2; //20
    
    console.log(a2,b2);

//3rd method - de-structuring
    let a3 = 10;
    let b3 = 20;

    [a3,b3] = [b3,a3] //array swapping

    console.log(a3,b3);



//Operations 

    console.log(Math.floor(13/5));

// question 1 - sum of digits

    let num = 4567;
    let sum = 0;
    while(num>0){
        let digits = 0;
        digits = digits + (num%10);
        sum = sum + digits ;
        num = Math.floor(num / 10)
    }
    console.log(sum)


// question 2 - increment and decrement 
    //pre-incre - change and use - burger king
    //post-incre - use and change - hotels
  
    let a4 = 10;
    let b4 = a4++;
    console.log(a4,b4)

// question 3

    let i =11;
    i = i++ + ++i;
    console.log(i)

// question 4

    let a5 = 11; 
    let b5 = 22;
    let c5 = a5 + b5 + a5++ + b5++ + ++a5 + ++b5;
    console.log("a5=" + a5)
    console.log("b5=" + b5)
    console.log("c5=" + c5)

//question 5

    let a6 = true;
    a6++
    console.log(a6)

//question 6

    let a7 = 11++
    console.log(a7) //error will come , cannot use unary operators with numbers


//question 7

    let j = 11;
    let f = --(j++);
    console.log(f) //also the same error , js firstly solve the numbers inside brackets as bodmas rule.


//imp

    console.log(Math.ceil(10.4))//rounds the number to the next number. 
    console.log(Math.round(10.4)) // round nos when >10.5 then to 10 and when <=10.5 then to 11
    console.log(Math.trunc(10.4)) //only remove the numbers after decimals 
    console.log(Math.floor(10.6)) // rounds the number to the previous number.
    console.log(Math.pow(10,5)) // 10^5
    console.log(Math.abs(-8)) // returns only the number even if neg or positive value
    console.log(Math.cbrt(64)) // returns cube root of a number
    console.log(Math.random(5000))// returns a pseudorandom number between 0 and 1 .used in otps
    console.log(Math.min(2, 4,5))// returns the smallest value
    console.log(Math.max(2,3,4))// returns the largest value
    console.log(Math.sqrt(16))// returns square root of the number

    let number = 10.4
    console.log(number.toFixed(2)) // same as Math.round but we can set how many digits after decimal , if no number then 0 is assigned
    console.log(number.toString())//convert to string
    console.log(number.toPrecision(1)) // then only one number i.e, fro, 10.4 only 1 is taken and the oputput will be 1e+1


//Heron's formula

    let first = 5
    let second = 4
    let third = 3

    let s = (first+second+third)/2
    console.log(Math.sqrt(s * (s-first) * (s-second) * (s-third)))

// Circumference of a circle

    let r = 2
    console.log(2 * Math.PI * r)