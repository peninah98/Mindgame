function genfib() {
  let a = 0;
  let b = 1;
  let first = true;
  
  return function fib() {
    if (first) {
      first = false;
      return a; 
    }
    
    const next = a + b;
    a = b;
    b = next;
    return a;
  };
}