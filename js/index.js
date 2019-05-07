const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach( btn => btn.addEventListener('click', digitPressed) );
function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}
const opers = document.querySelectorAll('.opers button');
opers.forEach( btn => btn.addEventListener('click', operPressed) );
function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

document.querySelector('.equal',).addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
} 

document.querySelector('.split',).addEventListener('click', splitPressed);
function splitPressed(n) {
  n = +n;  // Coerce to number.
  if (!n) {  // Matches +0, -0, NaN
  display.value = Error('Invalid dividend ' + n);
  }


// document.querySelector('.split').addEventListener('click', splitPressed);
// function splitPressed(n) {
//   n = +n;  // Coerce to number.
//   if (!n) {  // Matches +0, -0, NaN
//     throw new Error('Invalid dividend ' + n);
//   }
//   return n;
// }