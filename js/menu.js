// // Navigation Menu function
const menu = (function(){
    const hambugar = document.getElementById('menu_icon');
    const navItems = document.querySelector('.nav_items');
    const navLinks = document.querySelectorAll('.nav_items li')

    hambugar.addEventListener('click', ()=>{
        navItems.classList.toggle('open')
        navLinks.forEach(link =>{
            link.classList.toggle('fade')
        })
    })
})();

// Preloader
const proloader = (function(){
    const loader = document.querySelector(".loader")

    window.addEventListener("load", vanish);

    function vanish() {
    loader.classList.add("disppear");
    }
})();
