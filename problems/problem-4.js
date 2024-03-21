
/*
Assignment 5: Problem 4 - Turn in the following array of arrays into a single object.
The first element in each array is the key, and the second element is the value.

You will also be asked to omit an element from the array.

For example, the following array:

const items = [
	  [ 'name', 'Ford' ],
	  [ 'model', 'Mustang' ],
	  [ 'year', 1964 ], 	// Omit this element
	  [ 'color', 'red' ]
]

Should be turned into the following object:
{
	name: 'Ford',
	model: 'Mustang',
	color: 'red'
}

TO TEST:
You can run this example by running `node problems/problem-4` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const items = [
	  [ 'firstName', 'Luke' ],
	  [ 'lastName', 'Skywalker' ],
	  [ 'age', 19 ],
	  [ 'occupation', 'Jedi' ],
	  [ 'homePlanet', 'Tatooine' ]
]

// Omit the 'age' element

const person = items // append your code here
	.filter(object => object[0] !== 'age') //This will Filter out our age element 
	.reduce((object, [key, value]) => { //From here we are taking out each object  and identifying each key and its matchiing value with the sigular arrays
		object[key] = value;    // here We set our {OBJECT} to the key  and made that key associated to the value EX. { firstname : Luke}
		return object;  //will return the created object as a whole 
	},{})

test("Problem 4", person)