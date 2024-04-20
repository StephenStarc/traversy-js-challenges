function reverseString(words) {
//     let reversedString = ''
//     for(i=words.length-1;i>=0;i--){
//         reversedString += words[i]
//     }
//     return reversedString
// }
let result = ''
for(i=words.length -1;i>=0;i--){
    result += words[i]
}
return result
}


module.exports = reverseString;
