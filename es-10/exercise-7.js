function sumUntil(maxValue) {
  array = []
  for (i=0; i<=maxValue; i++){
    array.push(i)
  }
  return array.reduce((a,b) => a + b); 
}

console.log(sumUntil(5));