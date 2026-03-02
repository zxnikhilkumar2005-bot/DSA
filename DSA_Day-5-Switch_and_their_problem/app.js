const prompt = require("prompt-sync")();
//Q 22 using switch (check consonant or vowel using swich) 

// let s = prompt("Enter a string: ")
// let consonant = 0 ,vowel = 0;
// for(let i = 0; i<s.length;i++){
//     let ch = s.charAt(i);
//     switch(ch){
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u': vowel++;
//         break

//         default : consonant++;
//     }
// }

// console.log("consonant " + consonant);
// console.log("Vowel " + vowel);


// console.log("Enter 1 for area of rectangle");
// console.log("Enter 2 for area of sqaure");
// console.log("Enter 3 for area of triangle");
// let n = Number(prompt())
// switch(n){
//     case 1:{
//         let len = Number(prompt("Enter lenght: "))
//         let breadth = Number(prompt ("Enter breadth: "))
//         console.log(  "The area of rectangle: "  + (len*breadth));
//         break
//     }case 2:{
//         let sede = Number(prompt(`Enter sede: `))
//         console.log("The area of sqaure: "  + (sede*sede));
        
//         break
//     }case 3:{
//         let base = Number(prompt("Enter base: "))
//         let height = Number(prompt("Enter height: "))
//         console.log("The area of triangle: "  + (base*height)/2);
//         break
//     }
//     default : console.log("invalid number");
// }

// let ratingStr = Number(prompt("Enter a string: "))

// switch (ratingStr) {
//             case (0.0 <= ratingStr && 2.0 >= ratingStr): {
//                 return 'Floop'
//                 break
//             } case (2.1 <= ratingStr && 3.4 >= ratingStr): {
//                 return 'Semi-hit'
//                 break
//             }case (3.5 <= ratingStr && 4.5 >= ratingStr ):{
//                 return 'Hit'
//                 break
//             }case(4.6 <= ratingStr && 5.0 >= ratingStr ):{
//                 return 'Supet Hit'
//                 break
//             }
//             default : return 'invalid input'
//         }


let ch = prompt()
switch(true){
    case(ch=== 'a' || ch=== 'e' || ch === 'i' || ch=== 'o' || ch==='u'  ):{
        console.log('Volwel')
        break
    }case(ch=== 'A' || ch=== 'E' || ch === 'I' || ch=== 'O' || ch==='U'  ):{
        console.log('Volwel')
        break
    }
    default:
        console.log('Consonant');
}