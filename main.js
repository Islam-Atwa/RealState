
//=========== Change background color Header ===========//

const header = document.querySelector('header');
function changeBacgroundColorHeader(){
    if(this.scrollY >= 150)header.classList.add('scroll-header');
    if (this.scrollY <= 150)header.classList.remove('scroll-header');
}
window.addEventListener('scroll', changeBacgroundColorHeader);
