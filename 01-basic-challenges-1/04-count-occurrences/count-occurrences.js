function countOccurrences(phrase,letter) {
    // let count = 0
    // for( i of phrase){
    //     if (i == letter) count += 1
    // }
    // return count

    return phrase.split(letter).length - 1
}

module.exports = countOccurrences;
