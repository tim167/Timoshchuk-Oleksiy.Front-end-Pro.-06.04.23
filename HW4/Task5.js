function isPowerOfThree(num) {
  while (num % 3 == 0) {
    num /= 3;
  }
  return num == 1;
}

console.log(isPowerOfThree(81));