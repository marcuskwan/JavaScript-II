// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function kingdom () {
  const castle = "Castle";
  console.log(`I am the ${castle} in the parent original scope.`)
  nobility();
  function nobility () {
    const king = "King";
    console.log(`I am the ${king} in the children scope.`);
    children();
    function heir () {
      const prince = "Prince";
      console.log(`I am the ${prince} in the grandchild scope`);
    }
  }
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
