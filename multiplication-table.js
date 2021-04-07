const multiplicationTable = function(maxValue) {
  for (let i = 1; i <= maxValue; i++){
    for (let j = i; j <= (maxValue * maxValue); j + i){
    console.log(j);
  }
  console.log("\n");
};
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));