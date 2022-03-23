class UsersController < ApplicationController

  def index
    render json: User.all, except: [:password, :created_at, :updated_at], status: :ok
  end

  private

  def user_params
    params.permit(:username, :email, :first_name, :last_name, :profession, :github)
  end
end
