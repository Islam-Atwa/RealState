
//=========== Change background color Header ===========//

const nav = document.querySelector('header');
function changeBacgroundColorNavbar(){
    if(this.scrollY >= 150)header.classList.add('scroll-nav');
    if (this.scrollY <= 150)header.classList.remove('scroll-nav');
}
window.addEventListener('scroll', changeBacgroundColorNavbar);
