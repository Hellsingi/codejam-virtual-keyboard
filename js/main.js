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
    ['alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
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

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.id = 'textarea';
textarea.setAttribute('type', 'textarea');
divWrap.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
divWrap.append(keyboard);

// KeyboardLanguage changing
const lang = localStorage.getItem('virtualLang');
if (lang === null) {
  localStorage.setItem('virtualLang', 'eng');
}
document.addEventListener('keydown', (evt) => {
  if (evt.shiftKey && evt.altKey) {
    if (lang === 'eng') {
      localStorage.setItem('virtualLang', 'ru');
    } else {
      localStorage.setItem('virtualLang', 'eng');
    }
    location.reload();
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
    if (lang === 'eng') {
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

    spanRuDown.className = 'case down';
    spanRuDown.insertAdjacentText('afterbegin', keyboardKeys[i][j][2]);
    spanRu.append(spanRuDown);

    spanRuUp.className = 'case up';
    spanRuUp.insertAdjacentText('afterbegin', keyboardKeys[i][j][3]);
    spanRu.append(spanRuUp);

    spanEnDown.className = 'case down';
    spanEnDown.insertAdjacentText('afterbegin', keyboardKeys[i][j][4]);
    spanEn.append(spanEnDown);

    spanEnUp.className = 'case up';
    spanEnUp.insertAdjacentText('afterbegin', keyboardKeys[i][j][5]);
    spanEn.append(spanEnUp);
  }
}
