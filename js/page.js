const $ = (node) => document.querySelector(node)

document.addEventListener('DOMContentLoaded', function() {
    const startBtn = $('.start-btn');
    const hourInput = $('.hours-input');
    const minInput = $('.min-input');
    const secInput = $('.sec-input');
    startBtn.addEventListener('click',()=>{
        if(hourInput.value <= 0 && minInput.value <= 0 && secInput.value <= 0) {
            alert('입력필수')
            return
        }
    })
});