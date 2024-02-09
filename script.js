document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', function () {
        sidebar.style.left = (sidebar.style.left === '0px') ? '-250px' : '0';
    });
});