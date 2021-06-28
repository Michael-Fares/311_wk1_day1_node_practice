const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  let results = [];
  // write code for strings.pairs
  for(let i=2; i<str.length+2; i+=2) {
   results.push(str.slice(i-2,i))
  }
  return results;
}

const reverse = (str) => {
  // write code for strings.reverse
return str.split('')
.reverse()
.join('')
}

module.exports = {
  split,
  pairs,
  reverse
}