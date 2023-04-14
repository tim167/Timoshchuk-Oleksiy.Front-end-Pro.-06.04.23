const n = prompt("Введіть число"); 
const resultArray = [];
for (let i = 1; i <= 100; i++) {
  if (i * i < n) {
    resultArray.push(i);
  }
}

console.log(resultArray.join(','))