
// myDom.addEventListener('pointerdown', thePointerListener);
// function thePointerListener(event){
//     if (event.target.className == 'container') return;
//     let theDom = event.target.closest('.to-learn-events');
//     theDom.style.position = 'relative';
//     theDom.style.zIndex = 1000;
    
//     theDom.addEventListener('mousemove', moveEl) ;
//      function moveEl(el) {
//         let theDomReal = getComputedStyle(theDom);
//         theDom.style.top = parseFloat(theDomReal.top)  + 1 + 'px';
//         theDom.style.display= 'none'
//         let theBelow = document.elementFromPoint(el.clientX, el.clientY);
//         if (theBelow.className == 'container') return;
//         console.log(theBelow.id)
//         theBelow.insertAdjacentElement('afterend', theDom);
//         theDom.style.display = 'grid'
//         theDom.mouseup = function(e) {
//             theDom.removeEventListener('mousemove', moveEl);
//             theDom.mouseup = null;
//         }
        
//     }


// }
let timeModule = document.querySelectorAll('.each-Item');
console.log(timeModule)
function theRealTime(){
    let date = new Date();
    let [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    if (hours >= 12){
        timeModule[3].innerHTML = 'PM'
    } else {
        timeModule[3].innerHTML = 'AM'
    }
    if (hours > 12) {
           let myHours =  hours - 12;
           
           if (myHours < 10){
            timeModule[0].innerHTML = '0' + myHours;
           } else {
            timeModule[0].innerHTML = myHours;
           }
        } else {
            
            if (hours < 10){
                timeModule[0].innerHTML = '0' + hours;
               } else {
                timeModule[0].innerHTML = hours; 
        }
    }
    if (minutes < 10) {
        timeModule[1].innerHTML = '0' + minutes;
    } else {
        timeModule[1].innerHTML = minutes;
    }
    if (seconds < 10) {
        timeModule[2].innerHTML = '0' + seconds;
    } else {
        timeModule[2].innerHTML = seconds;
    }

}
setInterval(theRealTime, 1000);
