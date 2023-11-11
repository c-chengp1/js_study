/**
 * 最长子字符串的长度
 * @param { string } s string字符串
 * @returns int整型
 */
function lengthOfLongestSubstring(s) {
  // write code here
  let max = 0;
  const map = {};
  let left = 0;
  let right = 0;
  const len = s.length;
  while (right < len) {
    const rightV = s[right];
    if (map[rightV]) {
      map[rightV]++;
    } else {
      map[rightV] = 1;
    }
    // b
    while (map[rightV] > 1) {
      map[s[left]]--;
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}

lengthOfLongestSubstring("pwwkew");
