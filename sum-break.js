let sum = 0;
for(let i = 1; i <=200; i++){
    sum = sum + i;
    if(sum>=100){
        break;
    }
    console.log(i);
}
console.log('sum of the number is:', sum);