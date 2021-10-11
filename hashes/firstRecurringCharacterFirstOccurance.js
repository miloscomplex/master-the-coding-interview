
function firstRecurringCharacterFirstOccurance(input)  {

  let map = {}
  for (let i=0; i < input.length; i++) {

    if (map[input[i]] !== undefined) {
      map[input[i]] = [ map[input[i]][0]+1 , i ]
    } else {
      map[input[i]] = [1, i]
    }
  }
  //console.log(map);

  let min = input.length
  let firstOccurance;
  for ( const key in map ) {
    if (map[key][0] > 2) {
      if (map[key][1] <= min) {
        firstOccurance = key
      }
    }
  }
  return firstOccurance
}

//Bonus... What if we had this:
firstRecurringCharacterFirstOccurance([2,5,5,2,3,5,1,2,4])
// return 5 because the pairs are before 2,2
