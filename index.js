let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}


//Github stats
GitHubCalendar(".calendar", "dilipsanapinb");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "dilipsanapinb", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "dilipsanapinb", {
       proxy (username) {
         return fetch(`https://github.com/dilipsanapinb/dilipsanap.github.io/github?user=${username}`)
       }
    }).then(r => r.text())