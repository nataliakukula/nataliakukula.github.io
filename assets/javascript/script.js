// Navigation menu:
var menu = $("#menu");
$(document).ready(function () {
    menu.hide();

    $(document).on("click", ".container", function () {
        hamburgerMenu(this);
        menu.show();
    });

    function hamburgerMenu(x) {
        x.classList.toggle("change");
    }

    $(document).on("click", ".change", function () {
        menu.hide();
    });
});