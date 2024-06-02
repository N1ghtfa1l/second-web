// Находим все слайдеры и кнопку
const secondSliders = document.querySelectorAll('.combo__inner-slider');
const secondNextButton = document.querySelector('.combo-slider-arrow');


// Перебираем все слайдеры
secondSliders.forEach((slider, index) => {
    // Создаем клон первого элемента и добавляем его в конец
    let currentSlide = 0;
    const updateSliderPosition = () => {
        const sliderWidth = 390;
        slider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
    };
    secondNextButton.addEventListener('click', () => {
        if (currentSlide -1 < slider.children.length ) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSliderPosition();
    });

    window.addEventListener('load', updateSliderPosition);
});
