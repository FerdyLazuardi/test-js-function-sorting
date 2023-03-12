function solution(x,y){
if (x%5==0 && x+0.5 < y){
    x+=0.5;
    y-=x;
    return `transaksi berhasil, sisa saldo ${y}`;
 }
 else {
    return y;
 }
}

console.log(solution(10,100));