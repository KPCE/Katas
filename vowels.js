const numberOfVowels = function(data) {
  let vowels = 0
  vowels += data.split('a').length-1
  vowels += data.split('e').length-1
  vowels += data.split('i').length-1
  vowels += data.split('o').length-1
  vowels += data.split('u').length-1
  return vowels
};
//read string, return a count of the number of vowels
//read string, add all vowels to an array, return array.length
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));