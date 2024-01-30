// give me the list numbers between 1 to 30
// divisible by 5

for (let i = 1; i <= 30; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

// give me the list numbers between 1 to 30
// divisible by 3

for (let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

// give me the list numbers between 1 to 30
// divisible by 3 |or| 5

for (let i = 1; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}

// give me the list numbers between 1 to 30
// divisible by 3 &and& 5

for (let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

// give me the list numbers between 1 to 20
// divisible by 3, sum
let sumBy3 = 0;
for (let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        console.log(i);
        sumBy3 += i;
    }
}
console.log("total of the numbers:", sumBy3);




