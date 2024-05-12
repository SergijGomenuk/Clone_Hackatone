let buttonTop = document.querySelector(".offer-bottom-img2")
let buttonTop1 = document.querySelector(".scroll-btn")


buttonTop.addEventListener('click', scrollToTop)
buttonTop1.addEventListener('click', scrollToTop)

function scrollToTop(){
    window.scrollTo({
        top:0,
    })
}


