function test() {
  let count = 0;
  let symbol = formMain.str1.value.charAt(0).toLowerCase();

  for (let i = 0; i < formMain.str2.value.length; i++) {
    if (formMain.str2.value.charAt(i).toLowerCase() == symbol) {
      count += 1;
    }
  }
  alert(count);
}
