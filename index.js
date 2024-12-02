//function to find the longest common prefix string 
//amongst an array of strings 

let input = []

function commonPrefix(input) {
    let commonItems = ``
  for(let i = 0; i < input.length; i++){
  let char = input[0] [i]
  for (let s = 1; s < input.length; s++) {
    if(input[s][i] !== char) return commonItems
  }
  commonItems += char
  }
  return commonItems
}

console.log(commonPrefix([`flow`, `flower`, `flight`]))
console.log(commonPrefix([`goats`, `cave`]))
console.log(commonPrefix([`dog`, `racecar`, `car`]))