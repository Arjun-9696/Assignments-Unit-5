import './index.css';
import logo from './logo.png';

const root = document.getElementById('root');
const nav = document.createElement('div');
nav.setAttribute('class', 'nav');

const logoI = document.createElement('img');
logoI.setAttribute('src', logo);
logoI.setAttribute('class', 'image');
nav.append(logoI);

//main div to contain text
const textDiv = document.createElement('div');
textDiv.setAttribute('class', 'textDiv');
//for input section
const leftDiv = document.createElement('div');
leftDiv.setAttribute('class', 'leftDiv');

const textArea = document.createElement('textarea');
textArea.setAttribute('class', 'textArea');
textArea.setAttribute('placeholder', 'Enter Text Here');

const button = document.createElement('button');
button.innerText = 'Submit';

//show text;
const rightDiv = document.createElement('div');
rightDiv.setAttribute('class', 'rightDiv');

button.addEventListener('click', () => {
  rightDiv.innerText += '⭐' + textArea.value + '\n';
});
leftDiv.append(textArea, button);
textDiv.append(leftDiv, rightDiv);
root.append(nav, textDiv);
