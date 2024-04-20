function titleCase(sentence) {
// let split = sentence.toLowerCase().split(' ')
// const titlecase = []
// for(i=0;i<=split.length-1;i++){
//     split[i] = split[i][0].toUpperCase() + split[i].slice(1)
// }
//  return split.join(' ')

let result = sentence.split(' ') 

for(i=0;i<=result.length - 1;i++){
    result[i] = result[i][0].toUpperCase() + result[i].slice(1)
}
return result.join(' ')
}

module.exports = titleCase;
