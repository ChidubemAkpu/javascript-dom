const actionButtons = document.querySelector('.buttons');
const displayRegion = document.querySelector('.gen-input');
const myForm = document.querySelector('form');
const myAction= document.querySelector('.view-action')
actionButtons.addEventListener('click', generatePassWord);
function generatePassWord(event) {
    if (!event.target.value) return;

    if (event.target.value == 'Generate') {
        getPassWord()
        return;
    }
    navigator.clipboard.writeText(displayRegion.value);
    myAction.style.opacity = 1;
    setTimeout(() => myAction.style.opacity = '', 4000);
    displayRegion.value = '';

}

function getPassWord() {
    let thePassword = ''
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    for (let i = 0; i<=8; i++) {
        let pos = Math.ceil(Math.random() * letters.length);
        thePassword += letters.charAt(pos)
    }
    displayRegion.value = thePassword;

}


