// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// colors.reverse();
// console.log(colors);

// for of reversed------------

// const rev_numbers = [];
// for(const color of colors){
//     rev_numbers.unshift(color);
// }
// console.log(rev_numbers);


// second sestem reversed---------

const rev_colors = [];
for( let i = 0; i < colors.length; i++){
    const color = colors[i];
    rev_colors.unshift(color);
}
console.log(rev_colors);




