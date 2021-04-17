let teams = document.getElementsByClassName('main-nav-item');
let teamsDropdown = document.getElementsByClassName('teams-dropdown')[0];

teams[0].onmouseover = function () {
    teams[0].classList.add('main-nav-item-selected');
    document.getElementsByClassName('teams-dropdown')[0].classList.add('teams-dropdown-show');
}

teamsDropdown.onmouseleave = function () {
    teams[0].classList.remove('main-nav-item-selected');
    teamsDropdown.classList.remove('teams-dropdown-show');
}