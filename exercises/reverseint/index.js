// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let revInt = n.toString().split('').reduce((rev, char) => {
        debugger;
        return char + rev;
    },'');
    // revInt = revInt.indexOf('-') !== -1 ? '-' + revInt : revInt;
    return parseInt(revInt) * Math.sign(n);
}

reverseInt(1234);
module.exports = reverseInt;
