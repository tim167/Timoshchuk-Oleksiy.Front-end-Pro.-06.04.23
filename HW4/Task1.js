let from = 20;
const to = 30;
const step = 0.5;

let result = [];
while(from <= to) {
  result.push(from);
  from += step;
}
console.log(result.join(' '));



const num = prompt('Введіть число');

let isPrime = num > 1;

if (isPrime){  
for(let i = 2; i < num; i++)
  if(num % i === 0){
    isPrime = false;
    break;
  }
}

console.log(isPrime);