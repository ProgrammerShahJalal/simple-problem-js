// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
/*
3rd= 2nd + 1st;
4th = 3rd + 2nd;
5th = 4th + 3rd;
6th = 5th + 4th;
nth = (n-1)th + (n-2)th;
ith = (i-1)th + (i-2)th;
*/

function fibonacciSeries(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const fiboSeries = fibonacciSeries(7);
console.log(fiboSeries);