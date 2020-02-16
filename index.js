'use strict';

/*
Data types:

- number
- string
- boolean
- null
- undefined
- object 
- symbol
- bigint
*/

// Numbers

// let integer = 1;
// let float = 1.23;

//Special types: Infinity, -Infinity, NaN (not a number)

//console.log (1 / 0, Infinity, -Infinity);

//console.log (Rich / 3); - NaN (Not a number);


//let age = "Rich" / 5;
//let calculation = age * 4 + 2 - 1;
// Math operations are safe! Worst case scenario = NaN


//Strings

// let name = "Rich";
// let surname = "Mery";
// let fullname = `Fullname: ${name} ${surname}`;
// let mathResult = `Result is: ${2 + 3 + 4}`;

// Booleans (Logical type)

// let underAge = false;
// let isWeekend = true;

// let isGreater = 16 > 8;

//Null

// let users = null

// Null is a reference to our non-existing object
// It is a special value that represents nothing, empty or value unknown
// Undefined = value not defined

// let x; // -> Undefined

//Objects & symbols
//Objects are used to present collections
//Symbols are used to create unique indentifiers for objects

/* typeof operator */

// let val = null;

/*
console.log(
    typeof null, // BUG returns object
    typeof number,
    typeof string,
    typeof boolean,
    typeof undefined,
    typeof console,
    typeof console.log // returns function een though functions are object types
    );

    */

// -----------  Sub Module 2 - Type Conversions ----------------

//String Conversion

/*let isSunday = false;

console.log( 
    'String Conversion:',
    String(isSunday), 
    String(null), 
    String(undefined), 
    String(1.25) 
    );
*/

// Number Conversion

// False = 0 - True = 1

/*
let currentDay = "14th";
let shoeSize = 9;
let hasLicence = false;
let badFormat = "  30  ";

console.log(
    'Number Conversion:',
    Number(currentDay), 
    Number(shoeSize),
    Number(hasLicence),
    Number(badFormat),
    Number(null),
    Number(undefined),
)

*/

// Boolean Conversion
/* Intuitively "empty" values are converted to false
- 0
- ""
- null
- undefined
- NaN

All other types become true

*/

/*console.log(
'Boolean conversion:',
Boolean(0),
Boolean(''),
Boolean(null),
Boolean(undefined),
Boolean(NaN),
Boolean(22),
Boolean(Infinity),
Boolean("Hey Rich"),
Boolean('true'),
Boolean('0'), // --> in some langs string with value is false (php)
Boolean('1.24'),
)

*?

/* 

Operators

*/

/*

Terms:

- Operand - Value operator is applied to
  5 + 2 - 5 and 2 are the operands
- Unary operator - operator assigned to a single operand
  -5 -> - is an unary operator and 5 is the operand
 Binary operator - operator assigned to 2 operands
  3 - 1 -> - is a binary operator and 3, 1 are operands

//Binary +

*/

//let name = "Rich" + ' ' + "Mery";
//let myString = 1 + "2";  // if + detects a string, it converts all operands to string
//myString = 1 + 1 + "2"; // operations are evaluated from left to right - 22

// All other operators, except binary +, convert to numbers
//let age = "21" -1;
//let days = 12 * "30";
//let randomCalculation = 12 / "2" + 1;

//console.log(randomCalculation);


// Unary +

//let underage = true;
//console.log(+underage); // -> 1 + converting booloean value to a number

//let x = "30";
//let y = "20";

//console.log(+x + +y);

//Remainder Operator - %

//console.log(5 % 2);
//console.log(6 % 3);

//Exponentiation operator

//console.log(2 ** 2);
//console.log(3 ** 2);
//console.log(4 ** 3);
//console.log(8 ** (1/3) ); // 8 to the power of 3 i.e. 2x2x2 = 8

/* 
Operators execution order is determined by PRECEDENCE TABLE! (online reference available) - 
JavaScript Precedence Table Uniary, Binary, Assignment (Assignment is an operator)
*/

//Comparisons

/*
< > = ..

Results will eitger be true or false - boolean
*/

// Number comparisons

//console.log (2 > 1); // Greater than
//console.log (1 != 2);

//We can assign comparisons to varibles
//let checkNumber = 3 > 5;
//console.log ("Check number: ", checkNumber);

//String comparison

//Compares by letter

//If the first letter is greater than the other strings first letter, then the first string is greater than the second
//If both characters are the same, we are going to compare the next letters
//Gets repeated (if needed) until the very end of the strings.
// If at the end of th string we still do not decide which string is greater or less, then they are equal

//console.log('A' > 'Z');
//console.log('Z' > 'A');
//console.log('A' > 'a');

// Comparison by different types

//When you compare different types, comparison operators are converting values to numbers

//console.log('3' < 1);  //3 < 1

//console.log(false == 0); // true = 1, false = 1
//console.log(true == 0); // == false because true = 1
//console.log(false == 0); //true
//console.log(false === 0); // false -> strict equaltiy
//console.log(1 === 1) //true, same type
//console.log('1' === '1') //true, same type
//console.log('1' === 1) //false, different type


//Comparisons with null and undefined

//console.log(null === undefined);
//console.log(null == undefined);  //== is defined to return true only when null == undefined

//console.log(null == 0); // == is defined to return true only when null == undefined
//console.log(null >= 0); // every other comparison operator converts null to 0 and undefined == NaN
//console.log(null > 0);  // false

//console.log(undefined == 0);  //Undefined only ever equals null
//console.log(undefined >= 0);  //Undefined is converted to NaN and comparison with NaN is instantly false
//console.log(undefined > 0);   //Same applies here

//Conditional operators

//IF statement

if ( 1 < 2){
console.log('TRUE code block');

}else{
  console.log('FALSE code blockS');
}

if ( '' ){
  console.log('TRUE code block');
  
  }else{
   console.log('FALSE code block');
  }


  
if ( null ){
  console.log('TRUE code block');
  
  }
  else if ( 1 ){
    console.log('ELSE IF code block');
  }
  else
  {
    console.log('FALSE code block');
  }


  //Ternary operator

let checkNum = ( 1 < 2 ) ? ('TRUE') : ('FALSE');

console.log(checkNum);