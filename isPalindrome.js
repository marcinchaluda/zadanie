const isPalindrome = (text) => {
    const onlyLetters = text.toLowerCase().replace(/[^a-z]/g, '');

    console.log(`Is expresion an "${text}" a palindrome? `);
    return onlyLetters === onlyLetters.split('').reverse().join('');
}

module.exports = isPalindrome;
