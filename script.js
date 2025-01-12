const sideMenu = document.querySelector("#sideMenue")
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")


function openMenue()
{
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenue()
{
    sideMenu.style.transform = 'translateX(16rem)';
}


// To add background to navigation bar when we scroll down or up we use below window.addEventListener code .
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg',
            'shadow-sm'
        )
        // to remove the background color we use this below code for navLink 
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50')
    }
    else
    {
        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg',
            'shadow-sm')
            navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50')
    }
})

// Light Mode and Dark Mode 
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark'))
    {
        localStorage.theme = 'dark';
    }
    else
    {
        localStorage.theme = 'light';
    }
  }