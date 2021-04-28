const camelCase = function(input) {
  const output = input.split(' ');
  
  for (let i = 1; i <= output.length - 1; i++) {
    output[i] = output[i][0].toUpperCase() + output[i].substr(1);
  }
  
  return output.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
//convert strings to camelcase