/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 23;
if (votingAge > 18) {
    console.log('true');
} else {
    console.log('false');
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var var1 = 5;
var var2 = 32;

if (var2 > var1) {
    var1 = var2;
} else {
    var1 = var1 - var2;
}
console.log(var1)
//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"))

//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    product = a * b;
    return product;
}
console.log(multiply(6, 2))

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function dogYears(humanAge) {
    dogAge = humanAge * 7;
    return dogAge;
}
console.log(dogYears(24))

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 
// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeed(weight, age) {
    if (age >= 1 && weight <= 5) {
        feed = .05 * weight;
        return feed;
    } else if (age >= 1 && weight <= 10) {
        feed = .04 * weight;
        return feed;
    } else if (age >= 1 && weight <= 15) {
        feed = .03 * weight;
        return feed;
    } else if (age >= 1 && weight > 16) {
        feed = .02 * weight;
        return feed;
    } else if (age <= (1 / 3)) {
        feed = .1 * weight;
        return feed;
    } else if (age <= (7 / 12)) {
        feed = .05 * weight;
        return feed;
    } else if (age <= (11 / 12)) {
        feed = .04 * weight;
        return feed;
    } else {
        console.log("please enter valid data.");
    }
}
console.log(dogFeed(15, 1))


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


const paper = 0
const scissors = 1
const rock = 2
let result

function compPick(num) {
    return Math.floor(Math.random() * num);
}
let cPick = compPick(3)

function game(choice, cPick) {
    if (choice === 0 && cPick === 2) {
        return 'Computer loses!';
    } else if (choice === 2 && cPick === 0) {
        return 'Computer wins!';
    } else if (choice === cPick) {
        return "It's a draw!";
    } else if (choice > cPick) {
        return "You win!";
    } else if (choice < cPick) {
        return "You lose!";
    }
}
console.log(game(2, cPick));
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


function kmToMiles(kilometers) {
    return kilometers * .621371;
}
console.log(kmToMiles(2))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCm(feet) {
    return feet * 30.48;
}
console.log(feetToCm(2))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(number) {
    for (let i = number; i >= 1; i--) {
        console.log(i + ' bottles of soda on the wall, ')
        console.log(i + ' bottles of soda. ')
        console.log('Take one down pass it around,')
        console.log(i - 1 + ' bottles of soda on the wall.');
    }
}
console.log(annoyingSong(4))


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalculator(mark) {
    if (90 <= mark) {
        console.log("A");
    } else if (80 <= mark) {
        console.log("B");
    } else if (70 <= mark) {
        console.log("C");
    } else if (60 <= mark) {
        console.log("D");
    } else if (0 <= mark) {
        console.log("F");
    } else {
        console.log("Please enter valid number from 0-100");
    }
}
console.log(gradeCalculator(65))

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
