let scrollTop = document.querySelector(".scrolltop")
window.onscroll = () => {
    if (this.scrollY >= 20) {
        scrollTop.style.opacity = "1"
    } else {
        scrollTop.style.opacity = 0
    }
}

scrollTop.onclick = () => {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
}