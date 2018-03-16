//Given the string, check if it is a palindrome.

function checkPalindrome(inputString){
    
    let backwardsString = inputString.split("").reverse().join("");

    return (inputString === backwardsString);
}

module.exports = checkPalindrome; 