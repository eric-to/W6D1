// function sum() {
//   let count = 0; 
//   for (let i = 0; i < arguments.length; i += 1) {
//     count += arguments[i]; 
//   }
// 
//   return count; 
// }

function sum(...nums) {
  let count = 0; 
  for (let i = 0; i < nums.length; i += 1) {
    let el = nums[i]; 
    count += el; 
  }

  return count; 
}

// Examples for myBind
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind1 = function(ctx) {
  const fn = this;
  const bindArguments = Array.from(arguments).slice(1);
  return function() {
    const callArguments = Array.from(arguments);
    return fn.apply(ctx, bindArguments.concat(callArguments));
  };
};

Function.prototype.myBind2 = function(ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

// Function.prototype.myBind1 = function (ctx) {
//   const fn = this;
//   const bindArgs = Array.from(arguments).slice(1);
//   return function _boundFn() {
//     const callArgs = Array.from(arguments);
//     console.log(bindArgs.concat(callArgs));
//     return fn.apply(ctx, bindArgs.concat(callArgs));
//   };
// };

// markov.says("meow", "Ned");
// markov.says.myBind1(pavlov, "meow", "Kush")();
// markov.says.myBind1(pavlov)("meow", "a tree");
// markov.says.myBind2(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");

Function.prototype.curry2 = function(numArgs) {
  numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) return numbers.reduce((acc, num) => acc + num);
    return _curriedSum;
  };
};

Function.prototype.curry = function(numArgs) {
  numbers = [];
  const _curriedSum = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) return this(...numbers);
    return _curriedSum;
  };
  return _curriedSum;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

currySum = sumThree.curry(3)(4)(20)(6); // == 30
console.log(currySum);






Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

// using apply
Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const fn = this;
  function _curriedFn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
};


