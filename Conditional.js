//discount shopping


let amount = 7000
let dis = 0

if(amount>0 && amount<=5000){
    dis = 0
}else if(amount>50001 && amount<7000){
    dis = 10
}else if(amount>=7000){
    dis = 20
}
console.log(amount-Math.floor((dis*amount)/100))

//electric bill

    // upto 100 units - rs 4/unit
    //  101-200 units - rs 6/unit
    // 201-400 units - rs 8/unit
    //  more than 400 units - rs 13/unit

    let unit = 300;
    let money = 0;
    if(unit>400){
        money = (unit-400) * 13
        unit = 400
    }if(unit>200 && unit<=400){
        money = money + (unit-200) * 8
        unit = 200
    }if(unit>100 && unit<=200){
        money = money + (unit-100)*6
        unit  = 100
    }if(unit<=100){
        money = money + unit * 4
    }

    console.log(money);


//Cash denomination  - checks how many 500 , 200 , 100 , 10 , 5 , 1... ect notes or coins in this

    let paisa = 4883;

    if(paisa>=500){
        console.log("500 Notes : " + Math.floor(paisa/500));
        paisa = paisa % 500;
    }
    if(paisa>=200){
        console.log("200 Notes : " + Math.floor(paisa/200));
        paisa = paisa % 200;
    }
    if(paisa>=100){
        console.log("100 Notes : " + Math.floor(paisa/100));
        paisa = paisa % 100;
    }
    if(paisa>=50){
        console.log("50 Notes : " + Math.floor(paisa/50));
        paisa = paisa % 10;
    }
    if(paisa>=20){
        console.log("20 Notes : " + Math.floor(paisa/20));
        paisa = paisa % 20;
    }
    if(paisa>=10){
        console.log("10 Notes : " + Math.floor(paisa/10));
        paisa = paisa % 10;
    }
     if(paisa>=5){
        console.log("5 Notes : " + Math.floor(paisa/5));
        paisa = paisa % 5;
    }
    if(paisa>=2){
        console.log("2 Notes : " + Math.floor(paisa/2));
        paisa = paisa % 2;
    }
    if(paisa==1){
        console.log("1 Notes : " + paisa);
    }
    

//nested Ternary operator

    let num = 0;
    console.log(num>0?"positive": num<0?"negative": "zero")


//switch 

    let number = 0.1 + 0.2
    number = Number(number.toFixed(1)); 

    switch(number){

        case 0.3 :  console.log("hi")
        break;

        case 0.5 : console.log('Hello')
        break;

        default : console.log("invalid")
    }
