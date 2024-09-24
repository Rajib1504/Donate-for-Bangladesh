function inputNumber(id) {
  const value = document.getElementById(id).value;
  const num = parseFloat(value);
  return num;
}
function targetId(id) {
  const target = document.getElementById(id).innerText;
  const n = parseFloat(target);
  return n;
}
