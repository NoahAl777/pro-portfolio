class UsersController < ApplicationController

  def index
    render json: User.all, only: user_params, status: :ok
  end

  private

  def user_params
    params.permit(:username, :email, :first_name, :last_name, :profession, :github)
  end
end
