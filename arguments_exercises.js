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

Function.prototype.myBind = function(ctx) { 
  let bindArguments = Array.from(arguments);
  this.apply(ctx, bindArguments);
};