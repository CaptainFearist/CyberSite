window.addEventListener(`DOMContentLoaded`, () => {
    const anchors = document.querySelector(`[data-back-to-top-anchor]`);
    const backToTopButton = document.querySelector(`.back-to-top`);
    
    function checkIntroductionVisibility() {
        const anchorsRect = anchors.getBoundingClientRect();
    
        if(anchorsRect.bottom < 0) {
            backToTopButton.classList.add(`show`);
        } else { 
            backToTopButton.classList.remove(`show`);
        }
    }
    
    function scrollToTop(duration = 800) {
        const start = window.scrollY;
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, start * (1 - ease));

            if (elapsed < duration) {
                requestAnimationFrame(animateScroll)
            }
        }
        requestAnimationFrame(animateScroll);
    }
    
    window.addEventListener(`scroll`, checkIntroductionVisibility);
    checkIntroductionVisibility();
    backToTopButton.addEventListener(`click`, () => scrollToTop(800));
})
