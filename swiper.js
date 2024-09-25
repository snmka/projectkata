function windowSize () {
    var windowWidth = window.innerWidth;
    if(windowWidth < 768){
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 'auto',

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else {
    }
};
window.addEventListener('resize', windowSize);
windowSize();
let brend_list_button = document.querySelector('.button__link');
let brend_list =  document.querySelector('.brendbar__li');
let button_text = document.querySelector('.button__link > span');
let img  = document.querySelector('.button__link > img');
brend_list_button.addEventListener('click', function() {
    brend_list.classList.toggle('fullsize');
    img.classList.toggle('button_close');
    button_text.innerHTML =
        (button_text.innerHTML === 'Скрыть')
            ? button_text.innerHTML = 'Показать все' : button_text.innerHTML = 'Скрыть';
})