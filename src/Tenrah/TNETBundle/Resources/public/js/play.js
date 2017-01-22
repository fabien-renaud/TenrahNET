var play = {
    chat: function() {
        var user = $('#play').data("user");
        var chatLog = $('#pl-chatLog');
        var tArea = $('#pl-textarea');
        var socket = io.connect('http://localhost:7080');
        socket.emit('newUser', user);

        socket.on('newUser', function(user) {
              var isToLastMessage = false;
              if(chatLog[0].scrollHeight - chatLog.height() == chatLog.scrollTop()) {
                  isToLastMessage = true;
              }

              chatLog.append('<span class="pl-newUser">' + user + ' joined the room.</span>');
              if(isToLastMessage == true) {
                  chatLog.scrollTop(chatLog.height());
              }
        });

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
    },

    loadApp: function () {
        $('.pl-app-ln').click(function (e) {
            $(".pl-app-ln").each(function () {
                var currApp = $(this);
                if(currApp.hasClass("pl-appActive")) {
                    currApp.removeClass("pl-appActive");
                }
            });
            $(this).addClass("pl-appActive");
        });
    },

    init: function() {
        play.chat();
        play.loadApp();
    }
};

$(document).ready(play.init);
