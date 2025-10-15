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
        handleTimer()
    })

    hourInput.addEventListener('change',(e)=>{isValue(e.currentTarget)})

    //input 값 입력시 버튼활성화
    function isValue(name) {
        if(name.value > 0) {
            startBtn.classList.add('on');
            startBtn.disabled = false;
            $('.start-icon').setAttribute('src',`/assets/images/icon-start.svg`)
        } else if (name.value == 0) {
            startBtn.classList.remove('on');
            startBtn.disabled = true;
            $('.start-icon').setAttribute('src',`/assets/images/icon-start-disabled.svg`)
        }
    }

    //timer 기능
    let timer;

    function handleTimer() {

        let hours = parseInt(hourInput.value, 10);
        let minutes = parseInt(minInput.value, 10);
        let seconds = parseInt(secInput.value, 10);

        timer = setInterval(() => {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(timer);
                alert('종료됐어요!');
                return;
            }

            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                if (minutes > 0) {
                    minutes--;
                } else {
                    minutes = 59;
                    if (hours > 0) {
                    hours--;
                    }
                }
            }

            hourInput.value = String(hours).padStart(2, '0');
            minInput.value = String(minutes).padStart(2, '0');
            secInput.value = String(seconds).padStart(2, '0');

        }, 1000);
    }
});