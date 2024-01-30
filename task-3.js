// Display sum of all the odd numbers from 81 to 131.
// while
let i = 81;
let sum = 0;
while (i <= 131) {
//   console.log(i);
    if(i % 2 !== 0){
        console.log("odd number-", i);
        sum += i;
    }
  i++;
}
console.log("Total-", sum);

// Display sum of all the even numbers from 206 to 311.
// while
let ii = 206;
let sum2 = 0;
while (ii <= 311) {
//   console.log(ii);
    if(ii % 2 === 0){
        console.log("even number-", ii);
        sum2 += ii;
    }
  ii++;
}
console.log("Total-", sum2);
