
//search through the string with each iteration finding a space and replacing it with %20

const urlEncode = function(text) {
  
  let string = ''
  let chart = ''
  for (let i = 0; i < text.trim().length; i++){
    if (text.trim().charAt(i) == ' '){
      chart = '%20';
      string = string + chart;
    } else {
      chart = text.trim().charAt(i)
      string = string + chart
    }
  }
  return string
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/*
Create a function named urlEncode that will receive a string of words, 
and return that string with all of the whitespace characters converted to %20. 
If there is whitespace on the outside of the string, like in our second example above, 
you should only replace the whitespace within the string.
DO NOT USE string.replace
*/