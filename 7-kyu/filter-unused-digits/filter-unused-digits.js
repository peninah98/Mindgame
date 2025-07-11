function unusedDigits(...args) {
  const allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const usedDigitsStr = args.join('');
  
  const unusedDigits = allDigits.filter(digit => 
    !usedDigitsStr.includes(digit.toString())
  );
  
  return unusedDigits.join('');
}