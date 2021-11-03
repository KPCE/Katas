const conditionalSum = function(values, condition) {
  let sum = 0;
  if (values == 0) {
    return sum;
  }
  values.forEach(element => {
    if (condition === "even") {
      if (element % 2 === 0) {
        sum += element;
      };
    } else {
      if (element % 2 !== 0) {
        sum += element;
      };
    };
  });
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


/*
output:
6
9
144
0
*/