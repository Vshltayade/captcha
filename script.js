const captcha = document.getElementById('captcha');
const refresh = document.getElementById('refresh');
const input = document.querySelector('input');
const check = document.getElementById('check');

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let str = '';
for(let i=0; i<5; i++){
    str += char[Math.floor(Math.random() * char.length)];
}

captcha.children.item(0).innerText = str[0];
captcha.children.item(1).innerText = str[1];
captcha.children.item(2).innerText = str[2];
captcha.children.item(3).innerText = str[3];
captcha.children.item(4).innerText = str[4];

refresh.addEventListener('click', captchaCode);

function captchaCode(){
    str = '';
    for(let i=0; i<5; i++){
        str += char[Math.floor(Math.random() * char.length)];
    }
    captcha.children.item(0).innerText = str[0];
    captcha.children.item(1).innerText = str[1];
    captcha.children.item(2).innerText = str[2];
    captcha.children.item(3).innerText = str[3];
    captcha.children.item(4).innerText = str[4];
}

check.addEventListener('click', () => {
    if(input.value === str){
        alert('captcha verified');
        captchaCode();
        input.value = '';   
    }else{
        alert('captcha verification failed');
        captchaCode();
        input.value = '';
    }
});