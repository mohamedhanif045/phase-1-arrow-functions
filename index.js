// Task 1: Declare a function using a function expression
const foo = function() {
    return 'bar';
  };
  
  // Task 2: Declare a function using an arrow function
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  
  // Task 3: Describe situations where arrow functions are used
  // Arrow functions are often used in JavaScript's iterator methods like .map()
  // Example usage of arrow function with .map():
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2); 
  console.log(squares); //=> [1, 4, 9]
// Function expression called divide
const divide = function(num1, num2) {
    return num1 / num2;
  };
  
  // Arrow function called square
  const square = x => x * x;
    