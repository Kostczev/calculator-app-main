const outputResult = document.querySelector('.calc__output');
const calc = document.querySelector('.calc__keyboard');

let curentText = 0;
let number;
let maxWidthResult = outputResult.clientWidth;

console.log(maxWidthResult);

window.addEventListener('resize', e => {
   maxWidthResult = outputResult.clientWidth;
})

document.addEventListener('keydown', e => {
   let key = e.key;
   switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
         addCalcNumber(key);
      break;

      case '=':
      case 'Enter':
         clickCalcResult();
         break;

      case 'Escape':
         clickCalcReset();
         break;

      case 'Backspace':
      case 'Delete':
         clickCalcDel();
         break;

      case '/':
      case '*':
      case '+':
      case '-':
         addMathSign(key);
         break;

      case '.':
         addCalcDot();
         break;
   }
   resizeFontSizeOutput();
})

calc.addEventListener('click', e => {
   if( !e.target.classList.contains('calc__key') ) return;
   let value = e.target.innerText;
   switch (value) {
      case '=':
         clickCalcResult();
         break;

      case 'RESET':
         clickCalcReset();
         break;

      case 'DEL':
         clickCalcDel();
         break;

      case '/':
      case '*':
      case '+':
      case '-':
         addMathSign(value);
         break;

      case '.':
         addCalcDot();
         break;

      default:         
         addCalcNumber(value);
         break;
   }
   resizeFontSizeOutput();
})

function clickCalcResult() {
   outputResult.innerText = eval(curentText);
   curentText = outputResult.innerText;
}

function clickCalcReset() {
   outputResult.innerText = 0;
   curentText = outputResult.innerText;
}

function clickCalcDel() {
   delCalcValue(outputResult);
   if ( outputResult.innerText == '' ) {
      outputResult.innerText = '0';
   }
}

function addMathSign(value) {
   outputResult.innerText = curentText + value;
}

function addCalcDot() {
   number = getLastNumber(outputResult.innerText); 
      if( number.indexOf('.') == -1 ) {
         number = ( number == '' ) ? '0.' : '.';
         addCalcValue(outputResult, number);
      }
}

function addCalcNumber(value) {
   number = getLastNumber(outputResult.innerText); 
   if ( number == '0' ) {
      delCalcValue(outputResult);
   }
   addCalcValue(outputResult, value);
}

function delCalcValue(output) {
   curentText = output.innerText.slice(0, -1);
   output.innerText = curentText;
}

function resizeFontSizeOutput() {
   let size = maxWidthResult / outputResult.scrollWidth;
   size = ( size >= 1 ) ? 1 : size; 
   outputResult.style.scale = size;
}

function getLastNumber(value) {
   let numbers = value.split(/[/,+,*,-]/);
   return numbers[numbers.length - 1];
}

function addCalcValue(output ,value) {
   output.innerText += value;
   curentText = output.innerText;
}