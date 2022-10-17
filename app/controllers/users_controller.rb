class UsersController < ApplicationController


  def new
    @user = User.new
  end

  def create
   @user = User.new(user_params)

   if @user.save
      UserMailer.with(user: @user).new_user_email.deliver_later

      flash[:success] = "Thank you for your user! We'll get contact you soon!"
      redirect_to thank_you_path
    else
      flash.now[:error] = "Your user form had some errors. Please check the form and resubmit."
      render :new
   end
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :message, :number, :select_language)
  end

end
