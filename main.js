
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

// =========== Value===============

const accordionItems = document.querySelectorAll('.value__accordion-item'); // تحديد جميع العناصر التي تطابق "الفئة " داخل الصفحة

accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.value__accordion-header');

    accordionHeader.addEventListener('click', ()=>{

        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item)=>{
    const accordionContent = item.querySelector('.value__accordion-content');
    
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open')

    }
}

// =========== Scroll Section Active Links===========//

const sections = document.querySelectorAll('section[id]'); 


function scrollActive(){
    const scrollPosition = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        let activeLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
        if(scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight){
            activeLink.classList.add('active-link');
        }
        else{
            activeLink.classList.remove('active-link');
        }

    })
}

window.addEventListener('scroll', scrollActive);


// =========== Show Scroll Up ===========//

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350)scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);