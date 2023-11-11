import Deque from '../data-structures/Deque.js'
function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)) { // {1}
        return false;
    }
    const deque = new Deque(); // {2}
    const lowerString = aString.toLocaleLowerCase().split(' ').join(''); // {3} 
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) { // {4}
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1 && isEqual) { // {5}
        firstChar = deque.removeFront(); // {6}
        lastChar = deque.removeBack(); // {7}
        if (firstChar !== lastChar) {
            isEqual = false; // {8}
        }
    }
    return isEqual;
}

let a = palindromeChecker('Abcba')

// console.log('abcba', palindromeChecker('abcbac'));

// console.log('abcbac', palindromeChecker('a'));