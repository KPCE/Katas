//check if there's a free spot for the vehicle coming in
// if there are, return the x/y coordinates of the parking spot
// if not, return false

const whereCanIPark = function (spots, vehicle) {
   // console.log(vehicle.charAt(0))
 
  
  for (let i = 0; i < spots.length; i++){
    for (let j = 0; j < spots[i].length; j++){
      if (vehicle === 'regular'){
        if (spots[i][j] === 'R'){
          //console.log('exit1')
          return [j, i]
        }
      } else if (vehicle === 'small'){
        if (spots[i][j] === 'R' || spots[i][j] === 'S'){
         //console.log('exit3')
          return [j,i]
        }
      } else if (vehicle === 'motorcycle'){
        if (spots[i][j] === 'R' || spots[i][j] === 'S' || spots[i][j] === 'M'){
          //console.log('exit5')
          return [j,i]
        }
      }
    }
  }
  
  return false
};

// sizes are small, motorcycle, regular
// capital letters are free spots, non-capital letters are taken spots
// r can park only in R
// s can park in R or S
// m can park in R S or M 

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))