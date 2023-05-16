function test() {
  if (
    Math.abs(formMain.xCord.value) <= Math.abs(formMain.sqCord.value) &&
    Math.abs(formMain.yCord.value) <= Math.abs(formMain.sqCord.value)
  ) {
    alert("In square");
  } else {
    alert("Not in square");
  }
}
