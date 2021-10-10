// Create a function that reverses a string

function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== 'string' ) return 'error';
  
  const tempArray = []
  for (let i = str.length - 1; i >= 0; i--) {
    tempArray.push(str[i])
  }
  return tempArray.join('')
}

reverseString('hello world')
