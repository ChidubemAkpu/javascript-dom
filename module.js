let theCarousel = document.querySelector('.carousel-inner');

let theSize = 0;
function carouselFunc() {
    let theScrollLeaf = document.querySelectorAll('.example');
    theCarousel.style.transform = `translateX(${theSize}px)`
    theSize -= 200;
    theCarousel.addEventListener('transitionend', function handler() {
        theCarousel.removeEventListener('transitionend', handler)
        new Promise(resolve => {
            setTimeout(() => resolve(carouselFunc), 3000);
        }).then(a => a())
    })
}
carouselFunc()


