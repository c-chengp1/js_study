function ListNode(x) {
  this.val = x;
  this.next = null;
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 */

function Merge(pHead1, pHead2) {
  // write code here
  if (!pHead1) return pHead2;
  if (!pHead2) return pHead1;
  if (pHead1.val <= pHead2.val) {
    pHead1.next = Merge(pHead1.next, pHead2);
    return pHead1;
  } else {
    pHead2.next = Merge(pHead2.next, pHead1);
    return pHead2;
  }
}
