let menu = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");

menu.onclick = () => {
    menu.classList.toggle("ri-close-line");
    menu.classList.toggle("ri-menu-line");
    navbar.classList.toggle("active")

}

window.onscroll =() => {
    menu.classList.remove('ri-close-line');
    menu.classList.toggle("ri-menu-line");
    navbar.classList.remove('active');
}


// Typed text animation
const typedEl = document.getElementById('multiple-text');
const phrases = ['Frontend Developer', 'Backend Developer', 'App Developer'];
let pi = 0, li = 0, typing = true;
function type() {
    if (typing) {
        if (li < phrases[pi].length) {
            typedEl.textContent += phrases[pi][li++];
            setTimeout(type, 120);
        } else { typing = false; setTimeout(type, 1500); }
    } else {
        if (li > 0) {
            typedEl.textContent = phrases[pi].substring(0, --li);
            setTimeout(type, 80);
        } else { typing = true; pi = (pi + 1) % phrases.length; setTimeout(type, 350); }
    }
}
type();