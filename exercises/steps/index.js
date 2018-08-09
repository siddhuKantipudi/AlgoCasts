// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if(n === row) {
        return;
    }

    if(stair.length === n) {
        console.log(stair);
        // stair should not be passed since we will be working on next row and should start from empty string
        return steps(n, row+1);
    }

    const add = stair.length <=row ? '#' : ' ';
    steps(n,row,stair + add);
}

module.exports = steps;


// function steps(n) {
//     for(let row= 0; row < n; row++) {
//         let stair = "";
//         for(let column= 0; column < n; column++)
//             if(column <= row) {
//                 stair += "#";
//             }else {
//                 stair += " ";
//             }
//         console.log(stair);
//     }
// }
