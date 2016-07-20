$(document).ready(function() {

  var $name = $('#name');
  var $email = $('#email');
  var $message = $('#message');
  var $showmsg = $('.showmsg');

  $('#portfolio-btn').on('click', function() {
    $('.ui.long.modal').modal({
      blurring: true
    })
    .modal('show');
  });

  $('.close-modal').on('click', function() {
    $('.ui.long.modal').modal('hide');
  });

  $('#submit-form').on('click', function() {
    $('.load_page').toggle();
     var messageme = {
      name: $name.val(), 
      email: $email.val(), 
      message: $message.val(), 
    };

    $('#load_page').toggle();

    $.ajax({
      type: 'POST',
      url: '/contact',
      data: messageme, 
      success: function(newMessage) {
        $name.val('');
        $email.val('');
        $message.val('');

        $('.load_page').toggle();
        toastr.success('Thank you for the message!').addClass('special');
      }, 

      error: function(error) {
        $('#load_page').toggle();
        var mali = "<ul>";
        $.each(error.responseJSON, function(index, item) {
          mali = mali+"<li>"+item+"</li>";
        });
        mali = mali+"</ul>";
        $('.load_page').toggle();
        toastr.error('Error sending message! Please check your fields!' + mali).addClass('special');
      }

    }); 

  });
});
