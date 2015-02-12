class PagesController < ApplicationController

  def index

  end
  def contact 
    
    message = Message.new(name: params[:name], 
                          email: params[:email],
                          msg_content: params[:message])

    if(message.save)

      ContactMailer.message_email(message).deliver

      render :json => message

    else
      render :json => message.errors, :status => :unprocessable_entity
    end

  end
end