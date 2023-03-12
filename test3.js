function solution(str){
    return str.replace(/\./g, '()');
}
console.log(solution("192.186.1.1"))