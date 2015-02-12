class ContactMailer < ActionMailer::Base
  default from: 'notification@example.com'

  def message_email(message)
    @name = message.name
    @email = message.email
    @message = message.msg_content

    mail(to:'kathleenlogmao@gmail.com', subject: "Message from #{@email}")
  end

end
