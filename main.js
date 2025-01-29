
//=========== Change background color Header ===========//

const nav = document.querySelector('header');
function changeBacgroundColorNavbar(){
    if(this.scrollY >= 150)header.classList.add('scroll-nav');
    if (this.scrollY <= 150)header.classList.remove('scroll-nav');
}
window.addEventListener('scroll', changeBacgroundColorNavbar);

// =========== SWIPER ===========// 

var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,  // المسافة بين الشرائح
    grabCursor: true,  // يجعل المؤشر يبدو كأنه يمسك العنصر
    centeredSlides: true,  // تصحيح الخطأ: يجب أن يكون centeredSlides وليس centerslides
    loop: true,  // يجعل التمرير دائريًا
    slidesPerView: "auto",  // يحدد عدد الشرائح المرئية تلقائيًا وفقًا للحجم

    navigation: {
        nextEl: ".swiper-button-next",  // زر التمرير للأمام
        prevEl: ".swiper-button-prev",  // زر التمرير للخلف
    },
});
