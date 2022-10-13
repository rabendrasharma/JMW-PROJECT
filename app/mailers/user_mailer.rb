class UserMailer < ApplicationMailer
  def new_user_email
    @order = params[:order]

    mail(to: 'admin@justmindwork.com', subject: "You got a new order!")
  end
end
