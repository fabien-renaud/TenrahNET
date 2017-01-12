var core = {
    buttonAnimate: function() {
        var btnHome = $('#btn-home');
        var btnCloud = $('#btn-cloud');
        var btnIRC = $('#btn-irc');
        var btnDraw = $('#btn-draw');
        var btnBookmark = $('#btn-bookmark');
        core.scaleButton(btnCloud);
        core.scaleButton(btnIRC);
        core.scaleButton(btnHome);
        core.scaleButton(btnDraw);
        core.scaleButton(btnBookmark);
    },

    scaleButton: function(btn) {
        btn.mouseenter(function () {
            btn.animate({
                height: "165px",
                width: "165px",
                fontSize: "2.45em"
            }, 80);
        });
        btn.mouseleave(function () {
            btn.animate({
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
