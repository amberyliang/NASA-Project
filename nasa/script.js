const scrollingText = document.querySelector(".scrolling-text");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const textPosition = scrollingText.getBoundingClientRect().top;

    if (textPosition < windowHeight / 2) {
        scrollingText.classList.add("scroll-up");
    } else {
        scrollingText.classList.remove("scroll-up");
    }
});
