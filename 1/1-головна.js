function reverseString(str) {
  if (str === "") {
      return;
  } else {
      reverseString(str.substring(1));
      console.log(str.charAt(0));
  }
}

reverseString("tiger");
