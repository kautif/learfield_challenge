let teams = document.getElementsByClassName('main-nav__item');
let teamsDropdown = document.getElementsByClassName('teams-dropdown')[0];
let mobileNavIcon = document.getElementsByClassName('mobile-nav-icon')[0];
let mobileNav = document.getElementsByClassName('mobile-nav')[0];

teams[0].onmouseover = function () {
    teams[0].classList.add('main-nav-item--selected');
    document.getElementsByClassName('teams-dropdown')[0].classList.add('teams-dropdown--show');
}

function removeDropdown () {
    teams[0].classList.remove('main-nav-item--selected');
    teamsDropdown.classList.remove('teams-dropdown--show');
}

teams[1].onmouseover = function () {
    removeDropdown();
}

teamsDropdown.onmouseleave = function () {
    removeDropdown();
}