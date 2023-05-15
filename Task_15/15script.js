function test() {
  let arr = formMain.arr1.value;
  let newarr = [];

  for (let i = 0; i < formMain.arr1.value.length; i++) {
    newarr[arr.length - i - 1] = arr[i];
  }
  alert(newarr);
}
