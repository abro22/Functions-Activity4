// /1. Create a function that takes in a number of minutes. Convert the minutes to seconds and console log the result.

function problem (minutes) {
    return minutes * 60
}

let answer = problem (10)
console.log (answer)

// 600 seconds


function minutestoSeconds (minutes) {
    console.log (minutes * 60)

}

minutestoSeconds (10)

//2 Create a function that takes an array and return the first element.

const colors = ["red", "blue", "pink", "gray"]

function allColors (colors) {
return colors [0]
}

console.log (allColors (colors))



//3. Create a function that takes a number as its parameter and returns true if it's less than or equal to zero, otherwise return false.

function theFunction (anumber) {
    
if (anumber <= 0) {
    return true
} else {
    return false
}
} 

console.log (theFunction(0))

console.log (theFunction(5))



//4. You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value. The first parameter of your function should be 2-pointers and the second parameter should be 3-pointers. 

function calculateScore (twopoint, threepoint) {
    return twopoint * 2 + threepoint * 5 
}

console.log (calculateScore (10, 12) )



//5. Create a function that tells you if an array is empty or not. It should take an array as a parameter. If the array is empty return true otherwise return false.

const emptyArray = []
const nonEmpty = [ "words", "letters"]
function arrayEmpty (array) {
    if (array.length === 0) {
        return true
    } else {
        return false
    }


}

console.log (arrayEmpty (emptyArray))
console.log (arrayEmpty(nonEmpty))

