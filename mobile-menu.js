$(document).ready(function () {
    $('.fa-chevron-up').hide();
    // If screensize is less than 1024px, body is equal to 100vh 
    // and mobile menu is equal to body minus height of main nav section in px
    if (document.body.clientWidth < 1024) {
        document.getElementsByClassName('mobile-nav-container')[0].style.height = $('body').height() - $('.main-nav').height() + 'px'; 
    }

    // Show or hide selected menu as well as icons associated with opening or closing
    function handleMobileMenu (mobileMenu, iconExit, iconEnter) {
        $(mobileMenu).slideToggle('slow');
        $(iconExit).fadeOut();
        setTimeout(function () {
            $(iconEnter).fadeIn();
        }, 375)
    }

    let isMobileMenuOpen = false;
    $('.fa-bars').on('click', function () {
        if (!isMobileMenuOpen) {
            handleMobileMenu('.mobile-nav-container', '.fa-bars', '.fa-times');
            isMobileMenuOpen = true;
        }
    })

    $('.fa-times').on('click', function () {
        if (isMobileMenuOpen) {
            handleMobileMenu('.mobile-nav-container', '.fa-times', '.fa-bars');
            isMobileMenuOpen = false;
        }
    })

    let isTeamsCollapsed = false;
    $('.fa-chevron-down').on('click', function () {
        if (!isTeamsCollapsed) {
            handleMobileMenu('.mobile-nav__teams', '.fa-chevron-down', '.fa-chevron-up');
            isTeamsCollapsed = true;
        }
    })

    $('.fa-chevron-up').on('click', function () {
        if (isTeamsCollapsed) {
            handleMobileMenu('.mobile-nav__teams', '.fa-chevron-up', '.fa-chevron-down');
            isTeamsCollapsed = false;
        }
    })
})