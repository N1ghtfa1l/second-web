// Находим все слайдеры и кнопку
const sliders = document.querySelectorAll('.shop__inner-slider');
const nextButton = document.querySelector('.slider-arrow');

// Перебираем все слайдеры
sliders.forEach((slider, index) => {
    // Создаем клон первого элемента и добавляем его в конец
    const firstSlideClone = slider.children[0].cloneNode(true);
    slider.appendChild(firstSlideClone);
    let currentSlide = 0;
    const updateSliderPosition = () => {
        const sliderWidth = 595;
        slider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
    };
    nextButton.addEventListener('click', () => {
        if (currentSlide < slider.children.length - 3) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSliderPosition();
    });

    window.addEventListener('load', updateSliderPosition);
});
