
const instructorWithLongestName = function(instructors){
  
  //best will be the expected output of the object which includes the instructor with the longest name
  //longest will be for comparison, and will be set to the index with the longest instructor's name
  //names will be an array of the names from instructors
  let best = instructors[0]
  let longest = 0
  let names = []
  let longestNames = 0
  //iterate through the array making a new array of names
  for (let i = 0; i < instructors.length; i++){
    names.push(instructors[i].name)
    }
    
    // iterate through array of names to find the longest one
  for (let i = 0; i < names.length; i++){
    if (names[i].length > longestNames){
      //take longest name's index and set to longest
      longestNames = names[i].length
      
      longest = i
      
    }
  }
  console.log(longest)
  best = instructors[longest]
return best
}




//attempt 1 - split the array into values and keys, find the index of the max.length on the names, return that index on instructors[i]
//  method failed, object keys and values return metadata designating the position within the array, must not be the way to solve this?
//attempt 2 - initialize new object with first object from array, compare the object with the array for length of first property (don't use name, generalize)
// then return the index of the correct object



console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

/*
//expected output of the to logs
//{name: "Jeremiah", course: "Web"}
//{name: "Domascus", course: "Web"}
*/