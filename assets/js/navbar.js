const navbar = document.getElementById('navbar');
const navbar2 = document.getElementById('navbar2');
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.menu ul');
const link = document.querySelector('.menu-list');

window.addEventListener('scroll', function() 
{
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > 75)
    {
        navbar.classList.add("nav-fixed");
        navbar2.classList.add("nav-fixed");
    }

    else
    {
        navbar.classList.remove("nav-fixed");
        navbar2.classList.remove("nav-fixed");
    }
}) 

menuToggle.addEventListener('click', function()
{
    nav.classList.toggle('slide');
});

link.addEventListener('click', function()
{
    nav.classList.toggle('slide');
    menuToggle.checked = false;
});