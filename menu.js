let teams = document.getElementsByClassName('main-nav-item');
let teamsDropdown = document.getElementsByClassName('teams-dropdown')[0];
let mobileNavIcon = document.getElementsByClassName('mobile-nav-icon')[0];
let mobileNav = document.getElementsByClassName('mobile-nav')[0];

teams[0].onmouseover = function () {
    teams[0].classList.add('main-nav-item-selected');
    document.getElementsByClassName('teams-dropdown')[0].classList.add('teams-dropdown-show');
}

teams[1].onmouseover = function () {
    teams[0].classList.remove('main-nav-item-selected');
    teamsDropdown.classList.remove('teams-dropdown-show');
}

teamsDropdown.onmouseleave = function () {
    teams[0].classList.remove('main-nav-item-selected');
    teamsDropdown.classList.remove('teams-dropdown-show');
}

$(document).ready(function () {
    document.getElementsByClassName('mobile-nav-container')[0].style.height = $('body').height() - $('.main-nav').height() + 'px'; 

    $('.mobile-nav-icon').on('click', function() {
        $('.mobile-nav-container').slideToggle('slow');
        $('.fa-bars').fadeToggle('fast', 'linear');
        $('.fa-times').fadeToggle('fast', 'linear');
    });
})