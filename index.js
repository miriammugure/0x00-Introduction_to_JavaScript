// sum of two numbers

function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

//nextNumber
function nextNumber(a){
    return a+1;
}
console.log(nextNumber(3));

//rectangle perimeter
function rectanglePerimeter(l,w){
    return (l+w)*2;
}
console.log(rectanglePerimeter(2,3));

//return something to me

function ReturnSomethingToMe(text){
    return "Something" + " " + text;
}
console.log(ReturnSomethingToMe("Miriam Mugure"));

//greater BMI
function greaterBmi(j,b){
    if(j==b){
        return "equal";
    }else if(j>b){
        return "Jane";
    }else{
        return "Bob";
    }
}
console.log(greaterBmi(2,3));

//is sum more than 100
function isSumMoreThan100(a,b){
    sum= a+b;
    return sum > 100;
}
console.log(isSumMoreThan100(200,3));

//basket ball points
// function basketBallPoints(a,b){
//     a= a*2;
//     b= b*3;
//     return a+b
// }
// console.log(basketBallPoints(1,1));

//minutes to seconds
function convertToSeconds(m){
   let s = m*60;
   if(s===0){
    return 0;
   }else if(s===1){
    return '$(s) second';
   } else {
    return '$(s) seconds';
   }
}
console.log(convertToSeconds(1/60));

//greater among three
// function greater(a,b,c){
//    if(a>b && a>c){
//     return a;
//    }else if(b>c && b>a){
//     return b;
//    }else if(c===a && c===b && b===a){
//     return a||b||c;
//    }else{
//     return c;
//    }
// }
// console.log(greater(3,13,43));

//football points
function footballPoints(win,drawn,lost){
    win= win*3;
    drawn= drawn*1;
    lost=lost*0;
    return win + drawn +lost;
}
console.log(footballPoints(5,0,2));

//even numbers
// function isEven(number) {
//     return number % 2 === 0;
// }

// for (let i = 0; i <= 101; i++) {
//     if (isEven(i)) {
//         console.log(i);
//     }
// }
