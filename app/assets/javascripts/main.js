$(document).ready(function() {

  var $name = $('#name');
  var $email = $('#email');
  var $message = $('#message');
  var $showmsg = $('.showmsg');

  $('#submit-form').on('click', function() {
    var messageme = {
      name: $name.val(), 
      email: $email.val(), 
      message: $message.val(), 
    };

    $.ajax({
      type: 'POST',
      url: '/contact',
      data: messageme, 
      success: function(newMessage) {
        $name.val('');
        $email.val('');
        $message.val('');

        alert('THANKS!');
      }, 

      error: function(error) {
        alert('ERROR');
      }

    });
  });
});
