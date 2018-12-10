function stepsToZero(n) {
  if (n === 0) { /* base case */
    return 'Reached zero';
  } else { /* recursive case */
    console.log(n + ' is not zero');
    return stepsToZero(n-1);
  }
}

// 1. Invoke stepsToZero(n) where n is the number 2
let n = 2;
stepsToZero(n);

// 2. Is 2 zero?
// A. No

// 3. No, print message to console that 2 is not zero
console.log('2 is not 0');

// 4. Invoke stepsToZero(n-1) where n-1 evaluates to 1
// 		* Every recursive call adds a new invocation to the stack on top of the previous invocation
n = 2;
console.log(stepsToZero(n));

// 5. Is 1 zero?
// A. No

// 6. No, print message that 1 is not zero
console.log('1 is not zero');

// 7. Invoke stepsToZero(n-1) where n-1 evaluates to 0
n = 1;
console.log(stepsToZero(n));

// 8. Is 0 zero?
// A. Yes

// 9. Yes, return message that reached zero
console.log('Reached zero');

// 10. The above return pops the current invocation off the stack

/*
Understanding Recursion: A JavaScript Example
	*	https://www.youtube.com/watch?v=py7ZWFjrwEs

*/

let factorial = function fac(num) {
	if (num === 1) {
		return 1;
	}

	return num * fac(num - 1);
};

let final = factorial(4);
console.log(final);
















