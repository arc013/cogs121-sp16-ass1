(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();



    $("#user_input").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            socket.emit('chat message', $('#user_input').val());
            //console.log( $('#user_input').val());
            $('#user_input').val('');
            //$("form").submit();
        }
    });


    

    socket.on("newsfeed", function(data) {
       // console.log(data);
        console.log("hi");

        var parsedData=data;
     // grab and parse data and assign it to the parsedData variable.

     // other possible solution(s) here.
        $('#messages').prepend($('<li>').html(messageTemplate(parsedData)));
        function messageTemplate(parsedData) {
            // generate HTML text based on some data to be prepended into the list
        }
     });

    // You may use this for updating new message
    function messageTemplate(template) {
        var result = '<div class="user">' +
            '<div class="user-image">' +
            '<img src="' + template.user.photo + '" alt="">' +
            '</div>' +
            '<div class="user-info">' +
            '<span class="username">' + template.user.username + '</span><br/>' +
            '<span class="posted">' + template.posted + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="message-content">' +
            template.message +
            '</div>';
        return result;
    }
})($);
