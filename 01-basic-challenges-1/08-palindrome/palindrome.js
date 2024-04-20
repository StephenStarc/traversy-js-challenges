function isPalindrome(word) {

    let formattedText = word.toLowerCase().replace(/[^a-z0-9]/g, '')

    let reversedText = formattedText.split('').reverse().join('')
    return formattedText === reversedText

}

module.exports = isPalindrome;
