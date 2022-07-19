'use strict';
let addItems = document.querySelector('#add');
addItems.addEventListener('click', addMe());
function addMe() {
    document.getElementById('main-content').style.backgroundColor='blue'
    document.getElementById('main-content').style.color = 'white';
}

