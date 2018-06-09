/* Instructions
Using a function rand7 that generates a random number from 1 to 7, 
how would you write a function that generates a number with equal probability from 1 to 5?  

You must use rand7 to generate the random number in the function rand5.
You may NOT use Math.random in rand5.
*/

/* Notes
Math.floor() - returns the largest integer less than or equal to a given number.
Math.random() - returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
*/

function rand7(){
  return 1 + Math.floor(Math.random() * 7);
}

function rand5() {
  let num = rand7();
  while (num > 5) num = rand7();
  return num;
}