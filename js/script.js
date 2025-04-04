window.addEventListener(`DOMContentLoaded`, () => {
    const firstLanguage = document.querySelector(`.first-language`);
    const backToTopButton = document.querySelector(`.back-to-top`);
    
    function checkIntroductionVisibility() {
        const firstLanguageRect = firstLanguage.getBoundingClientRect();
    
        if(firstLanguageRect.bottom < 0) {
            backToTopButton.classList.add(`show`);
        } else { 
            backToTopButton.classList.remove(`show`);
        }
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        });
    }
    
    window.addEventListener(`scroll`, checkIntroductionVisibility);
    checkIntroductionVisibility();
    backToTopButton.addEventListener(`click`, scrollToTop);
})
