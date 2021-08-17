const numbers = [34, 54, 23, 86, 35, 88];
function arryTotal(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const totol = arryTotal([34, 54, 23, 86, 35, 88]);
console.log(totol);