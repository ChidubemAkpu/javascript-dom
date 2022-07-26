let theform = document.querySelector('form');
let input = document.querySelector('input');
let img = document.querySelector('.profile-image');
let realname = document.querySelector('.username');
let myAbout = document.querySelector('.about');
let loader = document.querySelector('.loader');
let profile = document.querySelector('.profile');

theform.addEventListener('submit', getInfo);

function getInfo(e) {
    e.preventDefault();
    profile.classList.remove('change-them');
    loader.classList.add('change-them');
    if (!input.value){
        input.value = 'Cannot be empty....!!!';
        input.style.color = 'red';
        setTimeout(() => input.value = '', 2000);
        return;
    }

    makeCall(input.value)
    input.value = ''

}

async function makeCall(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let theData = await response.json();
    let [imageurl, thename,about] = [theData.avatar_url, '@'+theData.login, theData.bio];
    img.src = imageurl;
    realname.innerHTML = thename;
    myAbout.innerHTML = about;
    loader.classList.remove('change-them');
    profile.classList.add('change-them')

}




