
/*
Assignment 5: Problem 3 - Turn the following array of numbers into an array of strings.
The strings should include the number and whether it is odd or even.
Remove any zeros and negative numbers from your result, and order the array from smallest to largest.

For example:
const numbers = [ 5, 4, 3, 2, 1, 0, -1, -2 ]

Would result in:
[
	'1 is odd',
	'2 is even',
	'3 is odd',
	'4 is even',
	'5 is odd'
]

You can use the included `isEven` function to determine if a number is even or odd.

TO TEST:
You can run this example by running `node problems/problem-3` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const isEven = number => number % 2 === 0 // returns true if the number is even //This Function is called in our Mapping to determine how and which number is even or odd and turns it into a string

const numbers = [ -10, -5, 0, 5, 10, 8, -2 ]

const numberStrings = numbers // append your array methods here
.filter(number => number > 0) //filter out 0 and neg numbers
.map( number => `${number} is ${isEven(number) ? 'even' : 'odd'}`) //Here we need to convert if the Number from the aray is odd or even and we are deconstructing the value into the variable
.sort((a,b) =>{ //a,b are compare variables a coming first b coming imd after this sorts through each value that passes through our first to fuctions
	const numA = parseInt(a.split(' ')[0])
	const numB = parseInt(b.split(' ')[0])
	return numA - numB //Here we are compare the A and B number strings and determing which number should come before eachother in the array
						//Ensuring we maintain the SMALLEST to LARGEST
})

test("Problem 3", numberStrings)