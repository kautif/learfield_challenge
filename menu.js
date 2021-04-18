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
    $('.fa-chevron-up').hide();
    if (document.body.clientWidth < 1024) {
        document.getElementsByClassName('mobile-nav-container')[0].style.height = $('body').height() - $('.main-nav').height() + 'px'; 
    }

    // $('.mobile-nav-icon').on('click', function() {
    //     $('.mobile-nav-container').slideToggle('slow');
    //     $('.fa-bars').fadeToggle('fast', 'linear');
    //     $('.fa-times').fadeToggle('fast', 'linear');
    // });

    let isMobileMenuOpen = false;
    $('.fa-bars').on('click', function () {
        if (!isMobileMenuOpen) {
            $('.mobile-nav-container').slideToggle('slow');
            $('.fa-bars').fadeOut();
            setTimeout(function () {
                $('.fa-times').fadeIn();
            }, 375)
            isMobileMenuOpen = true;
        }
    })

    $('.fa-times').on('click', function () {
        if (isMobileMenuOpen) {
            $('.mobile-nav-container').slideToggle('slow');
            $('.fa-times').fadeOut();
            setTimeout(function () {
                $('.fa-bars').fadeIn();
            }, 375)
            isMobileMenuOpen = false;
        }
    })

    let isTeamsCollapsed = false;
    $('.fa-chevron-down').on('click', function () {
        if (!isTeamsCollapsed) {
            $('.mobile-nav-teams').slideToggle('slow');
            $('.fa-chevron-down').fadeOut();
            setTimeout(function () {
                $('.fa-chevron-up').fadeIn();
            }, 375)
            isTeamsCollapsed = true;
        }
    })

    $('.fa-chevron-up').on('click', function () {
        if (isTeamsCollapsed) {
            $('.mobile-nav-teams').slideToggle('slow');
            $('.fa-chevron-up').fadeOut();
            setTimeout(function () {
                $('.fa-chevron-down').fadeIn();
            }, 375)
            isTeamsCollapsed = false;
        }
    })
})