console.log("--------------------------------")
console.log("Question 1")
console.log("--------------------------------")


function power(a,b){
    resultPower = a ** b;
    return resultPower;
}

console.log(power(2,5))


console.log("--------------------------------")
console.log("Question 2")
console.log("--------------------------------")


function calcLeapYear(year){
    if(year % 4 == 0) {
        return year + " is a leap year."
    }else{
        return year + " is not a leap year."
    }
}

var userYear = Number(prompt("Enter a year to check if it's leap year or not: "));
console.log(calcLeapYear(userYear));


console.log("--------------------------------")
console.log("Question 3")
console.log("--------------------------------")


function triangleS(a,b,c){
    return(a + b + c) / 2;   
}

function triangle(a,b,c){

    var S = triangleS(a,b,c);
    var area = S*((S - a)*(S - b)*(S - c));
    return area;

}

var userA = Number(prompt("Enter the First side of the triangle: "));
var userB = Number(prompt("Enter the Second side of the triangle: "));
var userC    = Number(prompt("Enter the Third side of the triangle: "));

console.log("The Area of the Triangle is: " + triangle(userA,userB,userC).toFixed(2));

console.log("--------------------------------")
console.log("Question 4")
console.log("--------------------------------")
console.log("--------------------------------")
console.log("Question 5")
console.log("--------------------------------")
console.log("--------------------------------")
console.log("Question 6")
console.log("--------------------------------")
console.log("--------------------------------")
console.log("Question 7")
console.log("--------------------------------")
console.log("--------------------------------")
console.log("Question 8")
console.log("--------------------------------")
console.log("--------------------------------")
console.log("Question 9")
console.log("--------------------------------")
console.log("--------------------------------")
console.log("Question 10")
console.log("--------------------------------")