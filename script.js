// // let myChanger= document.querySelector('p');
// // let myBox = document.querySelector('div');
// // let myLoader = document.querySelector('section')

// // myChanger.addEventListener('click', birthdayBox);

// // function birthdayBox() {
// //   myLoader.classList.toggle('remove-loader')
// //   myBox.classList.toggle('display-class');
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve(birthdayBox);
// //     }, 6000)
// //   }).then(getit => getit());
// // }



// // // // // 'use strict';

// // // // // const range = {
// // // // //     from: 1,
// // // // //     to: 20,

// // // // //     [Symbol.iterator]() {
// // // // //         this.current = this.from;
// // // // //         return this;
// // // // //     },

// // // // //     next() {
// // // // //         if (this.current <= this.to) {
// // // // //             return {done: false, value: this.current++}
// // // // //         } else {
// // // // //             return {done: true}
// // // // //         }
// // // // //     }
// // // // // }

// // // // // for (let eachEl of range) {
// // // // //     alert(eachEl)
// // // // // }



// // // // let myStr = 'HelloUser';

// // // // let iterator = myStr[Symbol.iterator]();
// // // // while(true) {
// // // //     let result = iterator.next();
// // // //     if (result.done) break;
// // // //     alert(result.value)
// // // // }

// // // // addded stuff
// let theCarousel = document.querySelector('.carousel-inner');
// let pos = 0;
// let theSize = 0;
// function carouselFunc() {
//     let theScrollLeaf = document.querySelectorAll('.example');
//     theCarousel.style.transform = `translateX(${theSize}px)`
//     theSize -= 200;
//     theCarousel.addEventListener('transitionend', function handler() {
//         theCarousel.removeEventListener('transitionend', handler)
//         new Promise(resolve => {
//             setTimeout(() => {
//                 if (pos == 7){
                    
//                     pos = 0;
//                 }
//                 let theRealWidth = parseInt(getComputedStyle(theCarousel).width);
//                 let theClone = theScrollLeaf[pos].cloneNode(true);
//                 pos++;
//                 theCarousel.style.width =  theRealWidth + 250 + 'px';
//                 theCarousel.append(theClone);
//                 resolve(carouselFunc)}, 3000);
//         }).then(a => a())
//     })
// }

// carouselFunc();
