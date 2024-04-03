class ListNode {
  constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
  }
}
function swapPairs(head) {
  if (!head || !head.next) {
      return head;
  }
  const temp = head.next;
  head.next = swapPairs(temp.next);
  temp.next = head;
  return temp;
}
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

console.log("Початковий зв'язаний список:");
printList(list);

const swappedList = swapPairs(list);

console.log("Зв'язаний список після обміну пар вузлів з головною рекурсією:");
printList(swappedList);

function printList(head) {
  let current = head;
  while (current) {
      process.stdout.write(current.value.toString() + " ");
      current = current.next;
  }
  console.log();
}
