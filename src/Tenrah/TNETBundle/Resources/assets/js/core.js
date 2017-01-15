var core = {
    IRC: function() {
        if($('#play')) {
            var user = $('#play').data("user");
            var chatLog = $('#pl-chatLog');
            var tArea = $('#pl-textarea');
            var socket = io.connect('http://localhost:7080');
            socket.emit('newUser', user);

            socket.on('message', function(message) {
                var isToLastMessage = false;
                if(chatLog[0].scrollHeight - chatLog.height() == chatLog.scrollTop()) {
                    isToLastMessage = true;
                }

                chatLog.append(
                    '<div class="pl-message"><span class="pl-messageDate">' + message['date'] +
                    '</span> <span class="pl-messageUser">' + message['user'] +
                    '</span><span class="pl-messageText">: ' + message['message'] + '</span></div>');
                if(isToLastMessage == true) {
                    chatLog.scrollTop(chatLog.height());
                }
            });

            tArea.keydown(function(e) {
                if(e.keyCode == 13 && !e.shiftKey) {
                    e.preventDefault();
                    var message = tArea.val();
                    tArea.val(null);
                    if(message != "") {
                        socket.emit('message', {'user': user, 'message': message});
                    }
                }
            });
        }
    },

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
        core.IRC();
        core.buttonAnimate();
    }
};

$(document).ready(core.init);
