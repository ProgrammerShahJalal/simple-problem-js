function largestElenemt(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const age = [-32, -65, -47, -66, -12, -28, -75];
const oldest = largestElenemt(age);
console.log(oldest);