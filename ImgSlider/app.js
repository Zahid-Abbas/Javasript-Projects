const slides = document.querySelectorAll(".slide");
let counter = 0;
console.log(slides);
slides.forEach((slide,index) => {
    slide.style.left = `${index*100}%`
})

const goPrev = () => {
    counter--;
    if(counter<0){
        counter = slides.length-1;
    }
    slideImage()
}

const goNext = () => {
    counter++
    if (counter === slides.length) {
        counter = 0; // Set counter to the last slide index
    }
    slideImage()
}

const slideImage = ()=>{
    slides.forEach(
        (slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    }
  )
}
