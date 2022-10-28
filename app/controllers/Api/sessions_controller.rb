class Api::SessionsController < ApplicationController
  skip_before_action :authorized?

  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :accepted
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

  def destroy
    # byebug
    session.delete(:user_id)
  end
end
