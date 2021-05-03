let teams = $('.main-nav__item');
let teamsDropdown = $('.teams-dropdown')[0];
let mobileNavIcon = $('.mobile-nav-icon')[0];
let mobileNav = $('.mobile-nav')[0];

$('#teams').mouseover(function () {
    $('#teams').addClass('main-nav-item--selected');
    $('.teams-dropdown').addClass('teams-dropdown--show');
})

function removeDropdown () {
    $('#teams').removeClass('main-nav-item--selected');
    $('.teams-dropdown').removeClass('teams-dropdown--show');;
}

// Tickets
    //  If user hovers over Tickets, dropdown is removed
    //  If user hovers back into the Teams Dropdown and back into another nav item,
    //      dropdown is removed

$('#teams-dropdown').mouseleave(function () {
    removeDropdown();
})

function removeTeamsDropdownOnEnter(id) {
    $(id).mouseover(function () {
        removeDropdown();
    })
}

removeTeamsDropdownOnEnter('#tickets');
removeTeamsDropdownOnEnter('#patriots');
removeTeamsDropdownOnEnter('#athletics');
removeTeamsDropdownOnEnter('#fans');