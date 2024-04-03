class ListNode {
  constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
  }
}

function swapPairsTail(head, prev = null) {
  if (!head || !head.next) {
      if (!prev) return head;
      prev.next = head;
      return head;
  }

  const nextNode = head.next.next;
  const temp = head.next;
  head.next = swapPairsTail(nextNode, head);
  temp.next = head;

  if (prev) {
      prev.next = temp;
  }

  return temp;
}
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

console.log("Початковий зв'язаний список:");
printList(list);

const swappedList = swapPairsTail(list);

console.log("Зв'язаний список після обміну пар вузлів з хвостовою рекурсією:");
printList(swappedList);
function printList(head) {
  let current = head;
  while (current) {
      process.stdout.write(current.value.toString() + " ");
      current = current.next;
  }
  console.log();
}
