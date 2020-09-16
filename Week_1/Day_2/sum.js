// take all arguments in terminal and read back to terminal, add them together and output the sum
// positive & negative values needx to be accounted for, and everything else should be ignored
// $ node sum.js 1 2 3 4 5 => 15
// $ node sum.js 1 2 3 4 bob 5 => 15

// Plan!
// I need to generate a list of numbers (array)

const args = process.argv.slice(2, process.argv.length);
const listOfNumbers = [1, 2, 3, 4, 5];

const transformIntoNumbers = (argArr) => {
  // the argument is a number, convert all arguments to numbers
  const output = [];
  for (let i = 0; i < argArr.length; i++) {
    // iterate over arguments, transform into numbers
    if(!Number.isNaN(Number(argArr[i]))) {
      const convertedValue = Number(argArr[i]);
      output.push(convertedValue);
    }   
  }  
  return output;
};  
const sum = argArr => { 
  return argArr.reduce((a,b) => a + b, 0);
};
console.log(sum(transformIntoNumbers(args)));
console.log(transformIntoNumbers(args));  
  // Iterate over the numbers and add them together
