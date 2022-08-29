let theCarousel = document.querySelector('.carousel-inner');

let theSize = 0;
async function carouselFunc() {
    let theScrollLeaf = document.querySelectorAll('.example');
    theCarousel.style.transform = `translateX(${theSize}px)`
    theSize -= 200;
    theCarousel.addEventListener('transitionend', () => {
        let theFirst = theScrollLeaf[0].cloneNode(true);
        theCarousel.append(theFirst);
        theScrollLeaf[0].remove();
        new Promise(resolve => {
            console.log(theFirst)
            resolve(carouselFunc)
        }).then(a => a())
    })
}
carouselFunc()


