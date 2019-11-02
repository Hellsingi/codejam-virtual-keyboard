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
    ['backspace', 'Backspace', 'Backspace', '', '', ''],
  ],
  [
    ['tab', 'Tab', 'Tab', '', '', ''],
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
    ['del', 'Delete', 'Del', '', '', '', '']
  ],
  [
    ['capslock', 'CapsLock', 'CapsLock', '', '', '', ''],
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
    ['enter', 'Enter', 'Enter', '', '', '']
  ],
  [
    ['shift', 'Shift', 'Shift', '', '', ''],
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
    ['', 'ArrowUp', '▲', '', '', ''],
    ['shift', 'Shift', 'Shift', '', '', '']
  ],
  [
    ['ctrl', 'Ctrl', 'Ctrl', '', '', ''],
    ['win', 'Win', 'Win', '', '', ''],
    ['alt', 'Alt', 'Alt', '', '', ''],
    ['space', 'Space', ' ', ' ', '', ''],
    ['alt', 'Alt', 'Alt', '', '', ''],
    ['', 'ArrowLeft', '◄', '◄', '◄', '◄'],
    ['', 'ArrowDown', '▼', '▼', '▼', '▼'],
    ['', 'ArrowRight', '►', '►', '►', '►'],
    ['ctrl', 'Ctrl', 'Ctrl', '', '', '']
  ]
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

const rowNumbers = [14, 15, 13, 13, 9];
for (let i = 0; i < keyboardKeys.length; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);
  for (let j = 0; j < rowNumbers[i]; j++) {
    const key = document.createElement('button');
    key.className = `key ${keyboardKeys[i][j][0]}`;
    row.append(key);

    const span = document.createElement('span');
    span.className = `${keyboardKeys[i][j][1]}`;
    span.insertAdjacentText('afterbegin', keyboardKeys[i][j][2]);
    key.append(span);
  }
}
