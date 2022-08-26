let myChanger= document.querySelector('p');
let myBox = document.querySelector('div');
let myLoader = document.querySelector('section')

myChanger.addEventListener('click', birthdayBox);

function birthdayBox() {
  myLoader.classList.toggle('remove-loader')
  myBox.classList.toggle('display-class');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(birthdayBox);
    }, 6000)
  }).then(getit => getit());
}

// // // function loadScript(src) {
// // //     return new Promise((resolve, reject) =>{
// // //         let script = document.createElement('script');
// // //         script.src = src;
// // //         document.head.append(script)
// // //         script.onload = () => resolve(script);
// // //         script.onerror = () => reject(new Error('Loading was unsuccessful'));
        
// // //     })
// // // }

// // // loadScript("/article/promise-chaining/one.js")
// // //   .then(function(script) {
// // //     return loadScript("/article/promise-chaining/two.js");
// // //   })
// // //   .then(function(script) {
// // //     return loadScript("/article/promise-chaining/three.js");
// // //   })
// // //   .then(function(script) {
// // //     // use functions declared in scripts
// // //     // to show that they indeed loaded
// // //     one();
// // //     two();
// // //     three();
// // //   }).catch((error) => alert(error));



// // 'use strict';

// // const range = {
// //     from: 1,
// //     to: 20,

// //     [Symbol.iterator]() {
// //         this.current = this.from;
// //         return this;
// //     },

// //     next() {
// //         if (this.current <= this.to) {
// //             return {done: false, value: this.current++}
// //         } else {
// //             return {done: true}
// //         }
// //     }
// // }

// // for (let eachEl of range) {
// //     alert(eachEl)
// // }



// let myStr = 'HelloUser';

// let iterator = myStr[Symbol.iterator]();
// while(true) {
//     let result = iterator.next();
//     if (result.done) break;
//     alert(result.value)
// }

let rectangle = {
    width: 25,
    length: 20,
    area: 100,
    perimeter: 10
}

let {length, width,  area, perimeter} = rectangle;
alert(width)