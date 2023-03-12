function solution(n){
    if(n>=91){
        return "A";
    }
    else if (n>=81){
        return "B";
    }
    else if (n>=71){
        return "C";
    }
    else if (n>=61){
        return "D";
    }
    else {
        return "E";
    }
}

console.log(solution(76));