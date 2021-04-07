const sumLargestNumbers = function(data) {
  let highOne = Math.max(...data)
  data.splice(data.indexOf(highOne))
  let highTwo = Math.max(...data)  
  
  
  
  /*
  this code works for examples 2 and 3, but for some reason highTwo does not return '1' in the first example
  for (let num of data){)
    if (data[num] > highOne){
      highOne = data[num];
    } }
  for (let num of data){
    if (data[num] > highTwo && data[num] < highOne){
      highTwo = data[num];
  }  
   
    
  }
  */
  console.log(highOne)
  console.log(highTwo)
  return highOne + highTwo
};
//take in array, find two largest numbers, add them together
//alternatively, could find largest number, delete from array, then find largest number again instead of finding the first and second largest numbers...

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));