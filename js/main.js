// window.onload = function load() {
import { keyboardKeys } from './keyboardKeys.js';

// Creating keyboard elements
const body = document.querySelector('body');

const divWrap = document.createElement('div');
divWrap.className = 'wrapper';
body.append(divWrap);

const pageLangBtn = document.createElement('button');
pageLangBtn.className = 'page-lang';
pageLangBtn.insertAdjacentText('afterbegin', 'Lang');
pageLangBtn.innerText = localStorage.getItem('virtualKeyboardLang');
divWrap.append(pageLangBtn);

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

// Language chanching pressing on button on page
function pageLangChanging() {
  if (localStorage.getItem('virtualLang') === 'eng') {
    localStorage.removeItem('virtualLang');
    localStorage.setItem('virtualLang', 'ru');
  } else if (localStorage.getItem('virtualLang') === 'ru') {
    localStorage.removeItem('virtualLang');
    localStorage.setItem('virtualLang', 'eng');
  }

  pageLangBtn.innerText = localStorage.getItem('virtualLang');

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


// Creating buttons
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

    spanRuDown.className = 'case-shown';
    spanRuDown.insertAdjacentText('afterbegin', keyboardKeys[i][j][2]);
    spanRu.append(spanRuDown);

    spanRuUp.className = 'case-hidden';
    spanRuUp.insertAdjacentText('afterbegin', keyboardKeys[i][j][3]);
    spanRu.append(spanRuUp);

    spanEnDown.className = 'case-shown';
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


// Flags of special button pressed/not pressed
let shiftPress = false;
let [altLeftPress, altRightPress] = [false, false];
let [ctrlLeftPress, ctrlRightPress] = [false, false];

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

// const shiftKey = document.querySelector('.shift');
function shiftUpKeyboard(evt) {
  if (evt.shiftKey) {
    // addActiveState(shiftKey);
    caseUp();
  }
}
function shiftDownKeyboard() {
  // shiftPress = false;
  // removeActiveState(shiftKey);
  caseDown();
}

function setCaretPosition(elem, pos) {
  if (elem.setSelectionRange) {
    elem.focus();
    elem.setSelectionRange(pos, pos);
  } else if (elem.createTextRange) {
    const range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

function activeBtnHighlighting(btnPress, specialBtnEl) {
  if (btnPress === false) {
    btnPress = true;
    // specialBtnEl.classList.add('active');
    addActiveState(specialBtnEl);
  } else {
    btnPress = false;
    // specialBtnEl.classList.remove('active');
    removeActiveState(specialBtnEl);
  }
  return btnPress;
}

// Functionality: printing symbols
function printingInTextArea(evt) {
  let symbol = '';
  const targetBtn = evt.target.closest('button');
  if (targetBtn) {
    const targetSpan = targetBtn.querySelector('.on');
    const targetBtnName = targetSpan.className.split(' ')[0];
    const specialBtn = targetBtn.classList[1];

    // Finding pressed symbol
    keyboardKeys.forEach((row) => {
      row.forEach((el) => {
        if (
          el[1] === targetBtnName
          && (specialBtn === undefined
            || specialBtn === 'space'
            || specialBtn === 'tab'
            || specialBtn === 'enter')
        ) {
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

    const specialBtnEl = document.querySelector(`.${specialBtn}`);

    if (
      specialBtn === 'shift-left'
      || specialBtn === 'shift-right'
      || specialBtn === 'capslock'
    ) {
      if (shiftPress === false) {
        // specialBtnEl.classList.add('active');
        addActiveState(specialBtnEl);
        caseUp();
      } else {
        // specialBtnEl.classList.remove('active');
        removeActiveState(specialBtnEl);
        caseDown();
      }
    }

    if (specialBtn === 'arrow') {
      const pos = textArea.selectionStart;

      if (targetBtnName === 'ArrowUp') {
        if (textArea.selectionStart > 69) {
          setCaretPosition(textArea, pos - 69);
        } else if (targetBtnName === 'ArrowRight') {
          setCaretPosition(textArea, pos + 1);
        } else if (targetBtnName === 'ArrowDown') {
          setCaretPosition(textArea, pos + 69);
        } else if (targetBtnName === 'ArrowLeft') {
          if (textArea.selectionStart > 0) {
            setCaretPosition(textArea, pos - 1);
          }
        }
      }
    }

    if (specialBtn === 'alt-left') {
      altLeftPress = activeBtnHighlighting(altLeftPress, specialBtnEl);
    }

    if (specialBtn === 'alt-right') {
      altRightPress = activeBtnHighlighting(altRightPress, specialBtnEl);
    }

    if (specialBtn === 'ctrl-left') {
      ctrlLeftPress = activeBtnHighlighting(ctrlLeftPress, specialBtnEl);
    }

    if (specialBtn === 'ctrl-right') {
      ctrlRightPress = activeBtnHighlighting(ctrlRightPress, specialBtnEl);
    }
  }

  textArea.focus();
}

document.addEventListener('keydown', shiftUpKeyboard);
keyboard.addEventListener('click', printingInTextArea);
document.addEventListener('keyup', shiftDownKeyboard);
document.addEventListener ('keydown', (evt) => {
  if (evt.shiftKey && evt.altKey) pageLangChanging();
});
