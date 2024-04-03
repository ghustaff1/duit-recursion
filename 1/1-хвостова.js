function reverseStringTail(str, reversedStr = "") {
  if (str === "") {
      console.log(reversedStr);
      return;
  } else {
      return reverseStringTail(str.substring(1), str.charAt(0) + reversedStr);
  }
}

reverseStringTail("tiger"); // виведе "regit"
