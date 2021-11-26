navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() 
{
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > 75)
    {
        navbar.classList.add("nav-fixed");
    }

    else
    {
        navbar.classList.remove("nav-fixed");
    }
}) 