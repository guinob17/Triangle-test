//With Readline-sync and node.js
//The program should inform whether the values ​​entered by the user form a triangle and whether this triangle is equilateral or scalene.
let rsync = require('readline-sync')
console.log('------------------------')
console.log(' *** Triangle Test *** ')
console.log('------------------------')

//Put the sizes 
let side1 = Number(rsync.question('Type the first side: '))
let side2 = Number(rsync.question('Type the second side: '))
let side3 = Number(rsync.question('Type the third side: '))
console.clear()

//A triangle only exists if one of its sides is greater than the absolute value of the difference of the other two sides and less than the sum of the other two sides.
let triangle = Math.abs(side2 - side3) < side1 && side1 < (side2 + side3) && Math.abs(side3 - side1) < side2 && side2 < (side3 + side1) && Math.abs(side1 - side2) < side3 && side3 < (side1 + side2)

//To be an equilateral triangle all sides must be equal.
//To be a scalene triangle all sides must be different from each other.
let equilateral = side1 == side2 && side2 == side3 && side3 == side1
let scalene = side1 != side2 && side2 != side3 && side3 != side1

//The test
if(triangle != Boolean('false')){
    console.log('That is not a triangle!')
}else{
    console.log('That is a triangle!')
    console.log(`Equilateral? ${equilateral}`)
    console.log(`Scalene? ${scalene}`)
}