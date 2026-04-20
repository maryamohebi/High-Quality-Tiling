/*Trust section animation */
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
}, {})
const valueElements = document.querySelectorAll(".value")
valueElements.forEach(el => observer.observe(el))

/*Services animation - Swiper.js */
const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
    }
})