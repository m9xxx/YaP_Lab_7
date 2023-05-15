let latinalphabet = [
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
];

function test() {
  let str = formMain.str.value;
  arr = str.split("");
  let latinsyms = [];
  let all = [];
  for (const elem of arr) {
    if (latinalphabet.includes(elem.toLowerCase()) && elem != " ") {
      latinsyms.push(elem);
      all.push(elem);
    } else if (!latinalphabet.includes(elem.toLowerCase()) && elem != " ") {
      all.push(elem);
    }
  }
  // alert(latinsyms.length);
  alert((latinsyms.length / all.length) * 100 + "%");
}
