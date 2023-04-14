let from = 20;
const to = 30;
const step = 0.5;

let result = [];
while(from <= to) {
  result.push(from);
  from += step;
}

console.log(result.join(' '));