// export default function GetRandomNumber(array, length) {
//     var randomArray = [];
//     for (let i = 0; i < length; i++) {
//         let randomNumber = Math.round(Math.random() * array.length);
//         randomArray.forEach(item => {
//             if (!JSON.stringify(item).includes(JSON.stringify(array[randomNumber], 0))) {
//                 randomArray.push(array[randomNumber]);
//             }
//         }
//         )
//     }
//     return randomArray;
// }

export default function GetRandomNumber(length) {
    var randomArray = [];
    for (let i = 0, j = length; i < j; i++) {
        let randomNumber = Math.round(Math.random() * 100);
        if (!randomArray.includes(randomNumber)) {
            randomArray.push(randomNumber);
        }
    }
    return randomArray;
}
// var randomArray = [];
// for (let i = 0, j = 10; i < j; i++) {
//     let randomNumber = Math.round(Math.random() * 100);
//     if (!randomArray.includes(randomNumber)) {
//         randomArray.push(randomNumber);
//     }
// }
// console.log(randomArray)