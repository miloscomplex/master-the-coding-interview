// Create a function that reverses a string

function reverseString(str) {
  const tempArray = []
  for (let i = str.length - 1; i >= 0; i--) {
    tempArray.push(str[i])
  }
  return tempArray.join('')
}

reverseString('hello world')
