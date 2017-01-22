var core = {
    buttonAnimate: function() {
        var btn = $('.btn-grew');
        btn.mouseenter(function () {
            $(this).animate({
                height: "165px",
                width: "165px",
                fontSize: "2.45em"
            }, 80);
        });
        btn.mouseleave(function () {
            $(this).animate({
                height: "150px",
                width: "150px",
                fontSize: "2.1em"
            }, 40);
        });
    },

    init: function() {
        core.buttonAnimate();
    }
};

$(document).ready(core.init);
