let body = document.getElementsByTagName('body')[0];
let sideMenu = document.getElementById('side-menu');

function openMenu() {
    sideMenu.style.width = "90%";
    document.getElementById("side-menu-btn").style.display = "none";
    body.style.overflow = 'hidden';
}

function closeMenu() {
    sideMenu.style.width = "0";
    document.getElementById("side-menu-btn").style.display = "block";
    body.style.overflow = 'auto';
}