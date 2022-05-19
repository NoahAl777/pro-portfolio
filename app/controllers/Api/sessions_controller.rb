class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      console.log(user)
      session[:user_id] = user.id
      render json: user, status: :accepted
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

  def destroy
    session.delete([:user_id])
  end
end
