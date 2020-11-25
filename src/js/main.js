import '../css/common.css';
import '../css/header.css';
import '../css/wrap.css';
import '../css/text.css';
import '../css/button.css';
import '../css/main-block.css';
import '../css/input.css';
import '../css/demo-block.css';
import '../css/ways.css';
import '../css/twine.css';
import '../css/powered.css';
import '../css/today.css';
import '../css/footer.css';
import '../css/avatar.css';

const blocks = [...document.getElementsByClassName('demo-block__content-inner')];
const youtubeDemo = document.getElementById('youtube-demo');

document.getElementById('demo-block-top').addEventListener('click', (e) => {
    const targetNumber = e.target.dataset.target;
    const targetBlock = blocks[Number(targetNumber)];

    if (!targetBlock) {
        return;
    }

    youtubeDemo.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    blocks.forEach(block => block.classList.remove('demo-block__content-inner_active'));
    targetBlock.classList.add('demo-block__content-inner_active');
});
// document.getElementById('request-form').addEventListener('submit', event => {
//     event.preventDefault();
//     const fields = [...event.currentTarget.elements];

//     fields.forEach(field => {
//         field.setAttribute("disabled", "disabled");
//     });

//     const data = fields.reduce((acc, element) => {
//         if (element.nodeName !== 'BUTTON') {
//             acc[element.name] = element.value;
//         }

//         return acc;
//     }, {});

//     let xhr = new XMLHttpRequest();

//     xhr.open('POST', '/api/request/');

//     xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

//     xhr.onload = () => {
//         if ((xhr.status === 200)) {
//             const requestBlock = document.getElementById('request-block');
//             const successBlock = document.getElementById('success-block');
        
//             if (requestBlock && successBlock) {
//                 requestBlock.classList.add('request__block_hide')
//                 successBlock.classList.remove('request__block_hide')
//             }

//             return;
//         }

//         fields.forEach(field => {
//             field.removeAttribute("disabled");
//         });
//     };

//     // 3. Отсылаем запрос
//     xhr.send(JSON.stringify(data));
// });