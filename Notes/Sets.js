/* Sets
* A set is a list of unique values 
Sets make for a great way to store something like user permissions because it negates
the possibility of overwriting previously stored values. Checking if a permission
exists is simply a matter of checking if it exists in the users' set.
*/

/* 
! Unique Values
Attempting to add the same value more than once will not increase the amount of times
that value appears within the set. This is a primary function of sets in that 
they only contain unique values. 
*/

let set = new Set([1, 1, 1]);        // * Here we initialize a new set by passing an array of values.
for (elem of set) console.log(elem); // * output -> 1

/*
! Adding Values to a Set 
*/

set.add(2);
console.log(set); // * output -> Set { 1, 2 }

set.add(1);
console.log(set); // * output -> Set { 1, 2 } (Unique Values Only)

/* 
! Deleting Values from a Set
*/

set.delete(1);  
console.log(set); // * output -> Set { 2 }
set.add(1);    
console.log(set); // * output -> Set { 2, 1 }
set.clear();      
console.log(set); // * output -> Set {} (all values cleared)

/* 
! Checking Values from a Set
*/

set.add(1);
set.add(2);
set.add(3);

console.log(set.has(4)); // * output -> false
console.log(set.has(1)); // * output -> true

/* 
! Iterating through Sets
A set has no key/value pairs technically because it only stores unique values.
However, certain methods are available to use.
*/

for (elem of set.entries()) console.log(elem); 
/* 
* output:
  [ 1, 1 ]
  [ 2, 2 ]
  [ 3, 3 ]
*/

for (elem of set.keys()) console.log(elem);   // * output -> 1, 2, 3
for (elem of set.values()) console.log(elem); // * output -> 1, 2, 3


