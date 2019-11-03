// window.onload = function load() {
const keyboardKeys = [
  [
    ['', 'Backquote', 'ё', 'Ё', '`', '~'],
    ['', 'Digit1', '1', '!', '1', '!'],
    ['', 'Digit2', '2', '"', '2', '@'],
    ['', 'Digit3', '3', '№', '3', '#'],
    ['', 'Digit4', '4', ';', '4', '$'],
    ['', 'Digit5', '5', '%', '5', '%'],
    ['', 'Digit6', '6', ':', '6', '^'],
    ['', 'Digit7', '7', '?', '7', '&'],
    ['', 'Digit8', '8', '*', '8', '*'],
    ['', 'Digit9', '9', '(', '9', '('],
    ['', 'Digit0', '0', ')', '0', ')'],
    ['', 'Minus', '-', '_', '-', '_'],
    ['', 'Equal', '=', '+', '=', '+'],
    ['backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['', 'KeyQ', 'й', 'Й', 'q', 'Q'],
    ['', 'KeyW', 'ц', 'Ц', 'w', 'W'],
    ['', 'KeyE', 'у', 'У', 'e', 'E'],
    ['', 'KeyR', 'к', 'К', 'r', 'R'],
    ['', 'KeyT', 'е', 'Е', 't', 'T'],
    ['', 'KeyY', 'н', 'Н', 'y', 'Y'],
    ['', 'KeyU', 'г', 'Г', 'u', 'U'],
    ['', 'KeyI', 'ш', 'Ш', 'i', 'I'],
    ['', 'KeyO', 'щ', 'Щ', 'o', 'O'],
    ['', 'KeyP', 'з', 'З', 'p', 'P'],
    ['', 'BracketLeft', 'х', 'Х', '[', '{'],
    ['', 'BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['', 'Backslash', '\\', '/', '\\', '|'],
    ['del', 'Delete', 'Del', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['capslock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['', 'KeyA', 'ф', 'Ф', 'a', 'A'],
    ['', 'KeyS', 'ы', 'Ы', 's', 'S'],
    ['', 'KeyD', 'в', 'В', 'd', 'D'],
    ['', 'KeyF', 'а', 'А', 'f', 'F'],
    ['', 'KeyG', 'п', 'П', 'g', 'G'],
    ['', 'KeyH', 'р', 'Р', 'h', 'H'],
    ['', 'KeyJ', 'о', 'О', 'j', 'J'],
    ['', 'KeyK', 'л', 'Л', 'k', 'K'],
    ['', 'KeyL', 'д', 'Д', 'l', 'L'],
    ['', 'Semicolon', 'ж', 'Ж', ';', ':'],
    ['', 'Quote', 'э', 'Э', "'", '"'],
    ['enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['', 'KeyZ', 'я', 'Я', 'z', 'Z'],
    ['', 'KeyX', 'ч', 'Ч', 'x', 'X'],
    ['', 'KeyC', 'с', 'С', 'c', 'C'],
    ['', 'KeyV', 'м', 'М', 'v', 'V'],
    ['', 'KeyB', 'и', 'И', 'b', 'B'],
    ['', 'KeyN', 'т', 'Т', 'n', 'N'],
    ['', 'KeyM', 'ь', 'Ь', 'm', 'M'],
    ['', 'Comma', 'б', 'Б', '.', '<'],
    ['', 'Period', 'ю', 'Ю', ',', '>'],
    ['', 'Slash', '.', ',', '/', '?'],
    ['', 'ArrowUp', '▲', '▲', '▲', '▲'],
    ['shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['win', 'Win', 'Win', 'Win', 'Win', 'Win'],
    ['alt', '322222222224', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['space', 'Space', ' ', ' ', '', ''],
    ['alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['', 'ArrowLeft', '◄', '◄', '◄', '◄'],
    ['', 'ArrowDown', '▼', '▼', '▼', '▼'],
    ['', 'ArrowRight', '►', '►', '►', '►'],
    ['ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ],
];

// Creating keyboard elements
const body = document.querySelector('body');

const divWrap = document.createElement('div');
divWrap.className = 'wrapper';
body.append(divWrap);

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
textArea.id = 'textarea';
textArea.setAttribute('type', 'textarea');
divWrap.append(textArea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
divWrap.append(keyboard);

// KeyboardLanguage changing
if (localStorage.getItem('virtualLang') === null) {
  localStorage.setItem('virtualLang', 'eng');
}
document.addEventListener('keydown', (evt) => {
  if (evt.shiftKey && evt.altKey) {
    if (localStorage.getItem('virtualLang') === 'eng') {
      localStorage.removeItem('virtualLang');
      localStorage.setItem('virtualLang', 'ru');
    } else if (localStorage.getItem('virtualLang') === 'ru') {
      localStorage.removeItem('virtualLang');
      localStorage.setItem('virtualLang', 'eng');
    }
    keyboard.querySelectorAll('.row').forEach((row) => {
      row.querySelectorAll('.key').forEach((key) => {
        const on = key.querySelector('.on');
        const off = key.querySelector('.off');
        on.classList.remove('on');
        on.classList.add('off');
        off.classList.remove('off');
        off.classList.add('on');
      });
    });
  }
});

const rowNumbers = [14, 15, 13, 13, 9];
for (let i = 0; i < keyboardKeys.length; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);

  for (let j = 0; j < rowNumbers[i]; j++) {
    const key = document.createElement('button');
    key.className = `key ${keyboardKeys[i][j][0]}`;
    row.append(key);

    const spanEn = document.createElement('span');
    const spanEnUp = document.createElement('span');
    const spanEnDown = document.createElement('span');
    const spanRu = document.createElement('span');
    const spanRuUp = document.createElement('span');
    const spanRuDown = document.createElement('span');

    let [langOn, langOff] = ['on', 'off'];
    if (localStorage.getItem('virtualLang') === 'eng') {
      langOff = ' off';
      langOn = ' on';
    } else {
      langOn = ' off';
      langOff = ' on';
    }
    spanEn.className = keyboardKeys[i][j][1] + langOn;
    spanRu.className = keyboardKeys[i][j][1] + langOff;

    key.append(spanEn);
    key.append(spanRu);

    spanRuDown.className = 'case-show';
    spanRuDown.insertAdjacentText('afterbegin', keyboardKeys[i][j][2]);
    spanRu.append(spanRuDown);

    spanRuUp.className = 'case-hidden';
    spanRuUp.insertAdjacentText('afterbegin', keyboardKeys[i][j][3]);
    spanRu.append(spanRuUp);

    spanEnDown.className = 'case-show';
    spanEnDown.insertAdjacentText('afterbegin', keyboardKeys[i][j][4]);
    spanEn.append(spanEnDown);

    spanEnUp.className = 'case-hidden';
    spanEnUp.insertAdjacentText('afterbegin', keyboardKeys[i][j][5]);
    spanEn.append(spanEnUp);
  }
}

// keyboard.addEventListener('click', (evt) => {
//   const targetBtn = evt.target.closest('button');
//   const targetLang = targetBtn.querySelector('.on');

//   keyboardKeys.forEach((row) => {
//     row.forEach((el) => {
//       if (el[1] === targetLang.className.split(' ')[0]) {
//         // textarea.value += el;
//       }
//     });
//   });
// });

// function activeButton(code){
//   console.log(code,'cccccc');
//   keyboardKeys.forEach((row) => {
//     row.forEach( (elem) => {
//       if(code === elem[1]){
//         const BlaBla = document.querySelector('.code');
//         // addActiveState(code);
//         console.log('bla', BlaBla);
//         console.log(code, 'dddd');
//       }
//     })
//   })
// }

// Functionality: printing symbols

let shiftPress = false;
let capsPress = false;

function addActiveState(element) {
  element.classList.add('active');
}

function removeActiveState(element) {
  element.classList.remove('active');
}

function caseUp() {
  shiftPress = true;
  // Changing case view in index.html to Uppercase
  document.querySelectorAll('.on').forEach((key) => {
    key.children[0].classList.remove('case-shown');
    key.children[0].classList.add('case-hidden');
    key.children[1].classList.add('case-shown');
    key.children[1].classList.remove('case-hidden');
  });
}

// Changing case view in index.html to undercase
function caseDown() {
  shiftPress = false;
  document.querySelectorAll('.on').forEach((key) => {
    key.children[0].classList.add('case-shown');
    key.children[0].classList.remove('case-hidden');
    key.children[1].classList.remove('case-shown');
    key.children[1].classList.add('case-hidden');
  });
}

const shiftKey = document.querySelector('.shift');
function shiftUpKeyboard(evt) {
  if (evt.shiftKey) {
    addActiveState(shiftKey);
    caseUp();
  }
}
function shiftDownKeyboard() {
  shiftPress = false;
  removeActiveState(shiftKey);
  caseDown();
}

function printingInTextArea(evt) {
  let symbol = '';
  const targetBtn = evt.target.closest('button');
  const targetSpan = targetBtn.querySelector('.on');
  const targetBtnName = targetSpan.className.split(' ')[0];
  const specialBtn = targetBtn.classList[1];

  // Finding pressed symbol
  keyboardKeys.forEach((row) => {
    row.forEach((el) => {
      if (el[1] === targetBtnName && targetBtnName !== 'Delete' && targetBtnName !== 'Backspace' && targetBtnName !== 'CapsLock') {
        if (localStorage.getItem('virtualLang') === 'ru') {
          shiftPress ? (symbol = el[3]) : (symbol = el[2]);
        } else shiftPress ? (symbol = el[5]) : (symbol = el[4]);
      }
    });
  });

  if (specialBtn === 'tab') {
    symbol = '  ';
  }

  if (specialBtn === 'enter') {
    symbol = '\n';
  }

  // Adding symbol to textArea
  textArea.setRangeText(symbol, textArea.selectionStart, textArea.selectionEnd, 'end');

  if (specialBtn === 'backspace') {
    if (textArea.selectionStart > 0) {
      const pos = textArea.selectionStart;
      textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos, textArea.value.length);
      textArea.setRangeText('', pos - 1, pos - 1, 'end');
    }
  }

  if (specialBtn === 'del') {
    const pos = textArea.selectionStart;
    if (textArea.selectionStart <= textArea.value.length) {
      textArea.value = textArea.value.slice(0, pos) + textArea.value.slice(pos + 1, textArea.value.length);
      textArea.setRangeText('', pos, pos, 'end');
    }
  }

  if (specialBtn === 'capslock') {
    const capsBtn = document.querySelector('.capslock');
    if (capsPress === true) {
      // capsBtn.classList.add('active');
      addActiveState(capsBtn);
      caseUp();
    } else {
      // capsBtn.classList.remove('active');
      removeActiveState(capsBtn);
      caseDown();
    }
    capsPress = !capsPress;
  }
  textArea.focus();
}

document.addEventListener('keydown', shiftUpKeyboard);
keyboard.addEventListener('click', printingInTextArea);
document.addEventListener('keyup', shiftDownKeyboard);
