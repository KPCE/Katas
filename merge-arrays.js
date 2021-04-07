function merge(array1, array2){
  let newArray = []
  for (let i = 0; i < array1.length; i++){
    newArray.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++){
    newArray.push(array2[i]);
  
  }
  newArray.sort()
  return newArray
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);