const business = 540;
const minister = 654;
const army = 345;
// if (business > minister && business > army) {
//     console.log('business man is bigger');
// }
// else if (minister > business && minister > army) {
//     console.log('minister is bigger');
// }
// else {
//     console.log('army is bigger');
// }

// var max = Math.max(army, business, minister);
// console.log(max);

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
var max = findLargest(700, 850);
console.log(max);