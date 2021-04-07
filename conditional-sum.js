const conditionalSum = function(values, condition) {
  let evenArr = []
  let oddArr = []
  let sum = 0
  for (let num in values){
    if (values[num]%2 === 0){
      evenArr.push(values[num])
    } else {
      oddArr.push(values[num])
    }
  }
  if (condition === 'even'){
    for (let num in evenArr){
      sum = evenArr.reduce((a,b) => a + b, 0)
    }
  } else if (condition === 'odd'){
    for (let num in oddArr){
      sum = oddArr.reduce((a,b) => a + b, 0)
    }
  }
  return sum
}

//read array, create new array for each element that matches the condition, loop through new array summing it
//read condition, loop through array adding elements that satisfy the condition to a new array, sum array, return sum
//split array into an odd and an even array, read condition and return the sum of the appropriate array
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));