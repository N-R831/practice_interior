'use strict'
{
    const hamburgerMenu = document.querySelector(".humburger");
    const mask = document.querySelector(".mask");

    const header = document.getElementById("header");

    const hamburgerMenuSections = document.querySelectorAll(".nav-menu")

    hamburgerMenu.addEventListener('click', e => {
        header.classList.toggle("open");
    })

    mask.addEventListener('click', e => {
        header.classList.toggle("open");
    })

    hamburgerMenuSections.forEach(hamburgerMenuSection => {
        hamburgerMenuSection.addEventListener('click', e => {
            header.classList.remove("open");
        })
    })
}