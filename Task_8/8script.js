function test() {
  let str = formMain.str.value;
  let arr = str.split(" ");
  let dublsarr = [];
  let newarr = [];
  for (const elem of arr) {
    if (!dublsarr.includes(elem.toLowerCase())) {
      newarr.push(elem);
      dublsarr.push(elem.toLowerCase());
    }
  }

  alert(newarr.join(" "));
}
