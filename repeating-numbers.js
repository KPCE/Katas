const repeatNumbers = function(data) {
  let num = ''
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data[i][1]; j++){
      num += data[i][0]
      if (data[i][1] - 1 === j && data.length > 1 && i !== data.length - 1) {
        num += ', ';
      }
    }
  }
  return num;
};
//input - first number is the value to repeat, second is the number of times to repeat it
//below are test cases
console.log('1', repeatNumbers([[1, 10]]));
console.log('2', repeatNumbers([[1, 2], [2, 3]]));
console.log('3', repeatNumbers([[10, 4], [34, 6], [92, 2]]));