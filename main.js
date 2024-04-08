console.log( "js is linked" )

// Variables
// 1. Declare a Variable: Create a variable named myAge and assign your age to it.

let myAge = 38;

// 2. Change a Variable: Declare a variable mood with the value "happy".Change it to "excited" later in the code.

let mood = "happy";
mood = "excited";

// 3. Declare more variables: Finally, create a variable for every other “type” that you know of.

let string = "";
let number = 0;
let boolean = true;
let notDefined = undefined;
let noValue = null;
let array = [];
let object = {};

// If Statements
// 3. Basic If Statement: Write an if statement that checks if a variable score is above 50. If so, log "You passed!" to the console.

let score = 52;
if ( score > 50 )
{
  console.log( "You Passed!" );
}

// 4. If - Else Statement: Create an if-else statement that checks if the temperature variable is below 20. Log "Wear a coat." if true, and "No coat needed." if false.

let temperature = 18;
if ( temperature < 20 )
{
  console.log( "Wear a coat." );
} else
{
  console.log( "No coat needed." );
}

// Loops
// 5. For Loop: Use a for loop to log numbers 1 through 5 to the console.

for ( let i = 1; i < 6; i++ )
{
  console.log( i );
}

// 6. While Loop: Use a while loop to create an array containing the numbers 1 to 5.

let letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q" ]
while ( letters.length < 10 )
{
  console.log( letters );
  // This will crash the browser if the letters array is less than 10 because this while loop will continuously log the letters array if it's length is less than 10 indices long as indicated in the loops conditional statement. 
}

// Arrays
// 7. Create an Array: Make an array named colors that contains three colors as strings.

const colors = [ "red", "blue", "green" ];

// 8. Access Array Elements: Access the second element in the colors array and log it to the console.   

console.log( colors[ 1 ] );

// Objects
// 9. Create an Object: Make an object book that has two properes: title and author.

let book =
{
  title: "Book Title",
  author: "Book Author"
}

// 10. Access Object Properes: Log the title of the book object to the console.

console.log( book.title );

// Array Methods
// 11. Using push() : Add a new color to the end of the colors array using push().

colors.push( "yellow" );
console.log( colors );

// 12. Using pop() : Remove the last element from the colors array and log it to the console.

console.log( colors.pop() );

// Mixed Challenges
// 13. Loop Through an Array: Use a for loop to log each color in the colors array to the console.

for ( let i = 0; i < colors.length; i++ )
{
  console.log( colors[ i ] );
}

// 14. Array of Objects: Create an array of objects where each object represents a pet and has properties for name and type. Log the name of the second pet.

let pets = [
  {
    name: "Tweety Bird",
    type: "Bird"
  },
  {
    name: "Sylvestor",
    type: "Cat"
  },
  {
    name: "Butch",
    type: "Dog"
  }
]

console.log( pets[ 1 ].name );

// 15. Object with Array: Create an object person with a property hobbies that is an array of strings.Add a new hobby to this array.

let person =
{
  hobbies: [ "fishing", "hunting", "gardening", "baking" ]
}

person.hobbies.push( "reading" );
console.log( person.hobbies );

// 16. If Statement with Array: Write an if statement that checks if the colors array includes the color "blue".If so, log "Blue is here!" to the console.

if ( colors.includes( "blue" ) )
{
  console.log( "Blue is here!" );
}

// 17. Nested Loops: Create a nested for loop that logs the coordinates( x, y ) for x = 1 to 3 and y = 1 to 3.

// I did not really understand this question initally as illustrated here:
// for ( let i = 1; i < 4; i++ )
// {
//   let x = i;
//   let y = i;
//   console.log( `coordinates(${ x },${ y })` );
// }

for ( let x = 1; x < 4; x++ )
{
  for ( let y = 1; y < 4; y++ )
  {
    let coordinates = [ x, y ];
    console.log( coordinates );
  };
}

// 18. Using forEach() : Use the forEach() method to log each color in the colors array to the console.

colors.forEach( ( color ) => console.log( color ) );

// 19. Using map() : Use the map() method to create a new array that contains the lengths of each string in the colors array.Log the new array to the console.

let stringLengths = colors.map( ( color ) => color.length.toString() );
console.log( stringLengths );

// 20. Using filter() : Use the filter() method to create a new array that contains only the colors from the colors array that have more than 4 letters.Log the new array to the console.

let longNamedColors = colors.filter( ( color ) => color.length.toString() > 4 );
console.log( longNamedColors )