function test() {
  let arr = [1, 1];
  let n = formMain.nnum.value;
  for (let i = 2; i < n + 1; i++) {
    let x = arr[i - 1] + arr[i - 2];
    arr.push(x);
    if (i == formMain.nnum.value) {
      formMain.res.value = x;
    }
  }
  //   formMain.res.value = arr.pop();
}
