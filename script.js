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

var totalMarks = 100;
function marks(eng, maths, comp){
    var totalObt = eng + maths + comp;
    return totalObt;
}

function avg(){
    var avg = marks(eng, maths, comp) / 3;
    return avg;
}

function percentage(){
    var percentage = marks(eng, maths, comp) / (totalMarks * 3) * 100
    return percentage;
}

var eng = Number(prompt("Enter your English marks: "));
var maths = Number(prompt("Enter your Mathematics marks: "));
var comp = Number(prompt("Enter your Computer marks: "));

console.log("The percentage is: " + percentage().toFixed(2) + " & average marks are: " + avg().toFixed(2));


console.log("--------------------------------")
console.log("Question 5")
console.log("--------------------------------")


function indexOf(sentence, word){
    for(var i = 0; i < sentence.length; i++){
        if(sentence[i] === word){
            return "The index of the word '" + word +  "' is: '" + i + "'";
        }
    }
    if(sentence[i] != word ){
        return "The word '" + word + "' is not found in the sentence.";
    }
}

var sentence = prompt("(Find Index Of) Enter a sentence: ");
var word = prompt("Enter a word to find its Index: ");

console.log(indexOf(sentence, word));

console.log("--------------------------------")
console.log("Question 6")
console.log("--------------------------------")


function delVowel(sentence){
    if(sentence.length <= 25){
        for(var i = 0; i < sentence.length; i++){
            if(sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "i" || sentence[i] == "o" || sentence[i] == "u"){
                sentence = sentence.replace(sentence[i], "");
            }
        }
        return "Deleted all the vowels: " + sentence;
    }else{
        return "Sentence should not be longer than 25 characters"
    }
}

var sentence = prompt("Enter a sentence to remove all the vowels from it: ").toLowerCase();

console.log(delVowel(sentence));

console.log("--------------------------------")
console.log("Question 7")
console.log("--------------------------------")


function countVowelPair(sentence){
    var occ = 0;
    var vowels = "aeiouAEIOU"
    for(var i = 0; i < sentence.length; i++){
        let vowelPair = sentence[i] + sentence[i + 1];

        if(vowels.includes(sentence[i]) && vowels.includes(sentence[i + 1])){

            switch(vowelPair){
                case "aa":
                case "ae":
                case "ai":
                case "ao":
                case "au":
                case "ea":
                case "ee":
                case "ei":
                case "eo":
                case "eu":
                case "ia":
                case "ie":
                case "ii":
                case "io":
                case "iu":
                case "oa":
                case "oe":
                case "oi":
                case "oo":
                case "ou":
                case "ua":
                case "ue":
                case "ui":
                case "uo":
                case "uu":
                    occ++;
                    break;

                default: 
                    break;
                }
            }
    }
    return "The number of pair of vowels occurences in the sentence are: " + occ;
}

var sentence = prompt("Enter a sentence to know the number of occurences of pair of vowels in it: ");
console.log(countVowelPair(sentence));


console.log("--------------------------------")
console.log("Question 8")
console.log("--------------------------------")


var distance = parseInt(prompt("Enter the distance between the two cities in Kilometers (km): "));

function toMeter(distance){
    return distance * 1000;
}
function toFeet(distance){
    return toMeter(distance) * 3.28;
}
function toInches(distance){
    return toFeet(distance) * 12;
}
function toCentimeter(distance){
    return toInches(distance) * 2.54;
}


console.log("The distance between the two cities in meters is: " + toMeter(distance) + "m");
console.log("The distance between the two cities in feet is: " + toFeet(distance) + "feet");
console.log("The distance between the two cities in inches is: " + toInches(distance) + "inches");
console.log("The distance between the two cities in centimeter is: " + toCentimeter(distance) + "cm");


console.log("--------------------------------")
console.log("Question 9")
console.log("--------------------------------")


function calcOverTime(Hours){
    var overTimeRate = 12.00;
    var regularHours = 40;
    if(Hours > regularHours){
        var overTime = Hours - regularHours;
        var overTimePay = overTime * overTimeRate;
        return overTimePay;
    }else{
        return 0
    }
}

var Hours = parseInt(prompt("Enter the total hours you have worked: "));
console.log("Your over time pay is Rs." + calcOverTime(Hours))


console.log("--------------------------------")
console.log("Question 10")
console.log("--------------------------------")


var userWithdrawl = parseInt(prompt("Enter the amount you want to withdrawl: "));

var hundredNotes = Math.floor(userWithdrawl / 100);
userWithdrawl = userWithdrawl % 100;

var fiftyNotes = Math.floor(userWithdrawl / 50);
userWithdrawl = userWithdrawl % 50;

var tenNotes = Math.floor(userWithdrawl / 10);
userWithdrawl = userWithdrawl % 10;

console.log("It will be " + hundredNotes + " hundred notes, " + fiftyNotes + " fifty notes & " + tenNotes + " ten notes");