let theCarousel = document.querySelector('.carousel-inner');
let pos = 0;
let theSize = 0;
function carouselFunc() {
    let theScrollLeaf = document.querySelectorAll('.example');
    theCarousel.style.transform = `translateX(${theSize}px)`
    theSize -= 200;
    theCarousel.addEventListener('transitionend', function handler() {
        theCarousel.removeEventListener('transitionend', handler)
        new Promise(resolve => {
            setTimeout(() => {
                if (pos == 7){
                    pos = 0;
                }
                console.log(pos)
                let theRealWidth = parseInt(getComputedStyle(theCarousel).width);
                let theClone = theScrollLeaf[pos].cloneNode(true);
                pos++;
                theCarousel.style.width =  theRealWidth + 200 + 'px';
                theCarousel.append(theClone);
                resolve(carouselFunc)}, 3000);
        }).then(a => a())
    })
}
carouselFunc();



