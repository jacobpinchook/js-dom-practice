const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = `Hey I'm red!`;
para.style.cssText = 'color: red';

container.appendChild(para);

const head3 = document.createElement('h3');
head3.textContent = `I'm a blue h3!`
head3.style.cssText = 'color: blue';

container.appendChild(head3);

const divPractice = document.createElement('div');
divPractice.setAttribute('style', 'border: 1px solid black; background: pink');
const headingLarge = document.createElement('h1');
    headingLarge.textContent = "I'm in a div";
const paragraph = document.createElement('p')
    paragraph.textContent = "ME TOO!";

divPractice.appendChild(headingLarge);
divPractice.appendChild(paragraph);

container.appendChild(divPractice);
