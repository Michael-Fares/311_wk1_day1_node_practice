const isEven = (num) => {
  // write code for numbers.isEven

  if(num % 2 === 0) {
    return true
  }
return false
}

const sum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr)

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

  for(let i=1; i<arr.length; i++) {
    for(let j=0; j<i; j++) {
      if(arr[i] + arr[j] === sum) {
        return true 
      }
    }
  }
return false 
}

module.exports = {
  isEven,
  sum,
  comboSum
}