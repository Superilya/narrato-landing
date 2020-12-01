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

const buttons = [...document.getElementsByClassName('demo-block__top-button')];
const blocks = [...document.getElementsByClassName('demo-block__content-inner')];
const youtubeDemo = document.getElementById('youtube-demo');

document.getElementById('demo-block-top').addEventListener('click', (e) => {
    const targetNumber = e.target.dataset.target;
    const targetBlock = blocks[Number(targetNumber)];

    if (!targetBlock) {
        return;
    }

    youtubeDemo.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    buttons.forEach(button => button.classList.remove('button_color_black'));
    e.target.classList.add('button_color_black');
    blocks.forEach(block => block.classList.remove('demo-block__content-inner_active'));
    targetBlock.classList.add('demo-block__content-inner_active');
});
