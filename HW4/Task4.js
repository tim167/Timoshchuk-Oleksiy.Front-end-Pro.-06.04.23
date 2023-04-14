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