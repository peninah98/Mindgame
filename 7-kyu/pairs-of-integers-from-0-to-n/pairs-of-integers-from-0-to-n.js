function generatePairs(n) {
  const result = [];
  
  for (let a = 0; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      result.push([a, b]);
    }
  }
  
  return result;
}
​
 
​