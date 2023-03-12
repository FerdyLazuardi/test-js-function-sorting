let sum=0;

function solution(n){
    for (let i=0; i<String(n).length; i++){
        sum += n%10;
    }
    return sum;
}

console.log(solution(2022));
