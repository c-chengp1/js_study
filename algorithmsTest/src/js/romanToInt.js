/**
* @param {string} s
* @return {number}
*/
/**
 * MMCMXCIV:1994
 */

function romanToInt(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'a': 4,
    'b': 9,
    'c': 40,
    'd': 90,
    'e': 400,
    'f': 900,
  }
  const specialMap = {
    'IV': 'a',
    'IX': 'b',
    'XL': 'c',
    'XC': 'd',
    'CD': 'e',
    'CM': 'f',
  }
  for (const key in specialMap) {
    // console.log(key,specialMap[key])
    if (s.indexOf(key) > -1) {
      
      s = s.replace(key, specialMap[key])
      console.log(s)
    }
  }
  let sum = 0
  const arr = s.split('')
  arr.forEach((item)=>{
    sum += map[item]
    console.log(sum)
  })
  return sum
};

console.log("first", romanToInt("MMMMCMXCIV")) 