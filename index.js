let number = document.querySelector(".number");

let i = 0;
function plus() {
  i++;
  console.log(i);
  number.innerHTML = i;
}

function minus() {
  i--;
  console.log(i);
  number.innerHTML = i;
}
