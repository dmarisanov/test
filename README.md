# Technical interview
Please complete this sheet as with as many good answers as possible

<details>
<summary>## TOP SECRET</summary>

## Expectations
<details>
  <summary>Junior</summary>
  
Mostly of the answers should be accepted as far as they are going to be working and make any sense.
Junior should not tell you the best practices, junior should be able to make it work.

When you talk to a junior you must focus on:
- 10% knowledge of javascript
- 50% logic and intuition
- 20% ability to learn
- 20% willing to improve

</details>

<details>
<summary>Middle</summary>

A Middle should know the same as Junior but with much more attention to details.
A Middle should understand why is the result like that, not only that its like that.
A Middle should know multiple right answers and handle in stress situations.

Tipically juniors with a year of experience are pretending to be middle.
Middles usually stuck at the knowledge they gain.


When you talk to a junior you must focus on:
- 40% knowledge of javascript
- 40% logic and intuition
- 10% ability to learn
- 10% ability to improve

</details>

<details>
<summary>Senior</summary>

TBD

</details>
</details>

## Strings

/**
 * TASK:
 * Make so isEXE is true if file.extension is true, otherwise false
 */

const file = 'my_file_is_good.exe';

/** YOUR CODE BELOW */
let isEXE;

<details>
<summary>RESPONSE:</summary>

const isEXE = file.endsWith('.exe'); // best
const isEXE = file.split('.').pop() === 'exe'; // second best
const isEXE = /\.exe$/.test(file);
const isEXE = file.indexOf('.exe') !== -1; // ask what if `file = 'a.exefile.pdf'`
const isEXE = file.includes('.exe'); // ask what if `file = 'a.exefile.pdf'`
const isEXE = file.split('.')[1] === 'exe'; // ask what if `file = 'a.exefile.pdf'`
// using .lastIndexOf('.') and .slice is also a thing
</details>

/**
 * TASK:
 * Make so filename is equal to file name
 * Make so extension is equal to file extension
*/

const file = 'my_file_is_good.exe';

/** YOUR CODE BELOW */
const filename = 'my_file_is_good';
const extension = 'exe';

<details>
<summary>RESPONSE:</summary>

// #1
const [filename, extension] = file.split('.'); // fail if file contains '.'

// #2
const extension = file.split('.').pop();
const filename = file.substring(0, file.lastIndexOf(`.${extension}`));

// #3
const [_, filename, extension] = /^(.+)\.([\w\d]+)$/g.exec(file);
</details>

/**
 * TASK:
 * How can obtain the second string out of first
 * Find the pattern, apply it
 */

const str =
  "first WORLD second WORLD third word fourth something fifth and sixth so seventh on";

/** YOUR CODE BELOW */
const res = `first second third fourth fifth sixth seventh`;

<details>
<summary>RESPONSE:</summary>
const res = str.split(' ').filter((_, index) => index % 2 === 0).join(' '); // best
</details>

/**
 * TASK:
 * How to obtain second string out of first
 */

const str = "  My Name Is    Josh          ";

/** YOUR CODE BELOW */
const res = `My Name Is    Josh`;

<details>

<summary>RESPONSE:</summary>

// #1 best but no :D 
str.trim(); // good to know, but the target is to make user write its own trim
// #2 probably best
str.replace(/^\s+|\s+$/g, '');
// #3
const trimmed = str.substring(str.split('').findIndex((char) => char !== ' '), str.length - str.split('').reverse().findIndex((char) => char !== ' '));
// #4 Using while/for/forEach will count more/less the same
const str = '  My Name Is Josh          ';

let firstCharIndex = str.length + 1;
let lastCharIndex = -1;

for (let index in str) {
  if (str[index] === ' ') {
    continue;
  }

  if (index < firstCharIndex) {
    firstCharIndex = Number(index);
  }
  if (index > lastCharIndex) {
    lastCharIndex = Number(index);
  }
}

// Substring is inclusive, so "My Name Is Josh " has last char at index 14, while substring will ignore the last arguement so +1 must be taken
const trimmed = str.substring(firstCharIndex, lastCharIndex + 1);
</details>

## Arrays

/**
 * TASK:
 * How can one array transform
 * Then find out the sum
 */

const arr = [1, 2, 3, 4, 5, 6];

/** YOUR CODE BELOW */
const res = [2, 4, 6, 8, 10, 12];

/** YOURE CODE BELOW */
const sum = 42;

<details>
<summary>RESPONSE:</summary>

const arr2 = arr.map((el) => el * 2);
const sum = arr2.reduce((agg, el) => agg + el, 0); // for is allowed
</details>
  
/**
 * TASK:
 * How to transform array of strings into array of numbers
 * Strong conversion and more soft one
 */

const arr = ['1', '2', '5', '6e', '7a', '8F'];

/** YOUR CODE BELOW */
const res1 = [1, 2, 5, NaN, NaN, NaN];

/** YOURE CODE BELOW */
const res2 = [1, 2, 5, 6, 7, 8];

<details>
<summary>RESPONSE:</summary>

const arr2 = arr.map((num) => Number(num));
</details>

/**
 * TASK:
 * How to obtain second array out of first?
 */

const arr = [1, 0, 2, 5, NaN, NaN, NaN];

/** YOUR CODE BELOW */
const res = [1, 0, 2, 5];

<details>
<summary>RESPONSE:</summary>

const res = arr.filter((element) => !Number.isNaN(element)); // best
const res = arr.filter(Boolean); // wont work with 0 ( add 0 and ask again )
</details> 

/**
 * TASK:
 * How to remove the element from the array? Example third element.
 */

const arr = ['first', 'second', 'third', 'forth', 'vasea'];

/** YOUR CODE BELOW */
const arr = ['first', 'second', 'forth', 'vasea'];
<details>
<summary>RESPONSE:</summary>

arr.splice(2, 1);
</details> 

/**
 * Describe in few words some array methods:
 * - Shift
 * - Unshift
 * - Pop
 * - Push
 * - Slice
 * - Splice
 * - Concat
*/

<details>
<summary>RESPONSE:</summary>

- Shift => remove first
- Unshift => push to start
- Pop => remove last
- Push => push to end
- Slice => returns copy of array from a, b ( b not included ), may get one or two arguements, may get negative numbers as well
- Splice => removes part of an array ( can be overloaded with 3+ arguements which will be pushed instead of removed elements ). EX: [1, 2].splice(0, 1, 3); => [2], arr = [1, 2]; arr.splice(0, 1, 3); => arr == [3, 2]
- Concat => concat [1].concat([2]) => [1, 2];
</details> 

/**
 * Task:
 * What will be the output here?
*/

/**
const [...args] = [1, 2, 3, 4, 5];

const [f1, f2, ...args] = [1, 2, 3, 4, 5];

const [f1, f2, ...args, f5] = [1, 2, 3, 4, 5];

const [o1, o2] = { o1: 1, o2: 2 };

const keyword = 'o2';

const { o1, o2 } = { o1: true, o3: 'o2', [keyword]: 'yes' };

const { 2: f1, 3: f2 } = [1, 2, 3, 4, 5];
*/

<details>
<summary>RESPONSE:</summary>

const [...args] = [1, 2, 3, 4, 5]; // args => [1, 2, 3, 4, 5];
const [f1, f2, ...args] = [1, 2, 3, 4, 5]; // f1 => 1; f2=> 2, args => [3, 4, 5]
const [f1, f2, ...args, f5] = [1, 2, 3, 4, 5]; // Type error: Rest element must be last element
const [o1, o2] = { o1: 1, o2: 2 }; // Type error: Cannot use rest over different types
const keyword = 'o2';
const { o1, o2 } = { o1: true, o3: 'o2', [keyword]: 'yes' }; // o1 = true, o2 = 'yes'
const { 2: f1, 3: f2 } = [1, 2, 3, 4, 5]; // f1 = 3; f2 = 4;
</details> 

/**
 * TASK:
 * How to copy an object without one single property?
 */

// Create a object of `obj` which must not contain `_id` property.
const obj = { _id: 1, value: 2, ref: 3 }; // do not mutate it

/** YOUR CODE BELOW */

<details>
<summary>RESPONSE:</summary>

const { _id, ...safeObj } = obj; 
</details> 

/**
 * TASK:
 * How to clean an array?
 */

const arr = [1, 2, 3, 4, 5, 6, 7];

/** YOUR CODE BELOW */



/** Expect */
console.log(arr.length); // must be 0

<details>
<summary>RESPONSE:</summary>

// #1
arr.length = 0; // slow but the best ( removes the references as well so no memory leaks )
// #2
arr = []; // fast but overrides variable without changing the original array => memory leaks
// #3
arr.splice(0, arr.length); // fast but you create a new copy of the array, yet keeping the references so memory leaks may be expected
// #4 shift/pop until the end
while (arr.length) {
    arr.pop();
    // or
    arr.shift();
}
// for/foreach etc is accepted by jun/mid only
</details> 

/**
 * TASK:
 * How to create an array of x element where x is a variable?
 *
 * #2 Print each value from inside the array into a new line
 */

const x = Math.ceil(Math.random() * 100 + 1);

/** YOUR CODE BELOW */
const arr = []; // arr should be made of x elements with any value

/** Expect */
console.log(arr.length === x); // must be true

<details>
<summary>RESPONSE:</summary>

// #1 BEST
const arr = Array.from({ length: x }, (_, i) => i); // [1, 2, 3, ...];
// #2
const arr = [];
arr.length = x; // at this point we are going to have [Empty, Empty, ...n] (not parseable)
arr.fill(1); // [1, 1, 1, 1, 1]
</details>

/**
 * TASK:
 * How to strictly compare arrays?
 * Same values at same position must be found.
 */

const array = [1, 2, 3, 4, 5, 6];
const secondArray = [1, 2, 3, 4, 5, 6];

/** YOUR CODE BELOW */
const isEqual = true;

<details>
<summary>RESPONSE:</summary>
If the question is answered correctly ask what if: secondArray = [1,2,3,4,6,5]; ( technically the same but no:)


If the question was too easy then add some objects inside)

  
none of the below will work with unsorted arrays



// #1 BEST
JSON.stringify(array) === JSON.stringify(secondArray); // will work with non-primitives as well

// #2
array.join('') === secondArray.join(''); // .toString() is the same
// #3
array.every((el, index) => secondArray[index] === el);
array.reduce((res, el) => res && secondArray.includes(el), true);

</details>
  
/**
 * TASK:
 * How to sort an array
 */

const array1 = [1, 5, 3, 5]; // => [1, 3, 5, 5]
const array2 = [1, 5, 3, 5]; // => [5, 5, 3, 1]
const array3 = ["1", 3, "20", 5, "3", 19, 101, "101"]; // => ["1", 3, "3", 5, 19, "20", 101, "101"]
const array4 = [
  "1",
  "11",
  "11",
  "1111",
  "111",
  "2",
  "21",
  "2222",
  "23",
  "10009"
];

/** YOUR CODE BELOW */
<details>
<summary>RESPONSE:</summary>

const array1 = [1, 5, 3, 5].sort();

const array2 = [1, 5, 3, 5].sort().reverse();
const array2 = [1, 5, 3, 5].sort((a,b) => b - a);

const array3 = ['1', 3, '20', 5, '3', 19, 101, '101'].sort((a,b) => Number(a) - Number(b))
const array4 = ["1", "11", "11", "1111", "111", "2", "21", "2222", "23", "10009"].sort(
  (a, b) => {
    return a.length === b.length ? a.localeCompare(b) : a.length - b.length;
  }
);


</details>

## Objects/Functions

/**
 * TASK:
 * What will be displayed in console?
 */

/**
function x() {
  console.log(this);
}

const y = () => { console.log(this); }

x(); // #1?
new x(); // #2?
y(); // #3?
new y(); // #4?
 */

/**
 * // but now?
'use strict';
function x() {
  console.log(this);
}

const y = () => { console.log(this); }

x(); // #1?
new x(); // #2?
y(); // #3?
new y(); // #4?
*/

<details>
<summary>RESPONSE:</summary>
What will be the output?

  
What if i add 'use strict'; at the beginning


Default use case:
-  window
-  x {}
-  window
-  type error

'use strict';? ( i'd say senior level question )
-  undefined
-  x {}
-  window
-  type error
</details>

/**
 * TASK:
 * How to find out whatever object has a key?
 */

// Write an if  statement that will pass whatever property exists
// { property: undefined }, // true
// { property: 0 }, // true
// { property: 1 }, // true
// { property: null }, // true
// { property: '0' }, // true
// { property: '' }, // true
// { property: ' ' }, // true
// { property: 123 }, // true
// { _property: undefined }, // false
// { _property: null }, // false

/** Youre code here */
if (false) {
  console.log('exists');
}

<details>
<summary>RESPONSE:</summary>

function yourFunction(object) {
  return object.hasOwnProperty('property');
}
</details>

### Promises/Async tasks

#### What is a promise
<details>
<summary>RESPONSE:</summary>
Eventual completion or failure of an asynchronous operation.
</details>

#### Why promises exist
<details>
<summary>RESPONSE:</summary>
To simplify asynchronous work and resolve callback hell issue.
</details>

#### What states to promises have
<details>
<summary>RESPONSE:</summary>
- pending
- fulfilled ( meaning success )
- rejected ( meaning error )
</details>

#### How to handle a success/error/any response of a promise
<details>
<summary>RESPONSE:</summary>
- .then
- .catch
- .finally
</details>

/**
 * TASK:
 * What will happen on code below?
 */

 /**
const promise = new Promise(() => {
  return Promise.resolve(3);
})
  .then((value) => {
    return Promise.resolve(1).then((value2) => {
      return value2 + value;
    });
  })
  .then((value) => {
    throw new Error("Something went wrong");
  })
  .then((value) => {
    return value + 3;
  })
  .catch((error) => {
    console.error(error);

    return Promise.resolve(10);
  })
  .then((value) => {
    return value + 10;
  });
*/

<details>
<summary>RESPONSE:</summary>

Actually nothing, the first promise chain is never resolved.
If we fix the first part it will return 25. Why? An error will be thrown, the value will be transformed to 10 because of catch return and passed to the next .then which will increment 10

</details>

#### What will be returned #2
/**
 * TASK:
 * What will happen on code below #2?
 */

 /**
const promise = new Promise((resolve) => {
  return resolve(Promise.resolve(3));
})
  .then((value) => {
    return Promise.resolve(1).then((value2) => {
      return value2 + value;
    });
  })
  .then((value) => {
    setTimeout(() => {
      throw new Error('Something went wrong');
    });

    return value;
  })
  .then((value) => {
    return value + 3;
  })
  .catch((error) => {
    console.error(error);

    return Promise.resolve(10);
  })
  .then((value) => {
    return value + 10;
  });
*/

<details>
<summary>RESPONSE:</summary>

17, why? because the throw is happening inside a setTimeout which is a macro task that will happen after the .then and .catch
</details>

### Promise Array

#### How to wait for an array of promises
<details>
<summary>RESPONSE:</summary>

Promise.all([]); // Will run all the promises at the same time and resolve once every single promise inside resolved
What will happen if any of the promises fail?

</details>

#### How to wait for an array of promises, no matter it fails or succeed
<details>
<summary>RESPONSE:</summary>

Promise.allSettled([]); // same as promise.all just will supress the fails  
Promise.all([].map((promise) => promise.catch(console.error));

</details>
