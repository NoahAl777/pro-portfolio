class UsersController < ApplicationController

  def index
    render json: User.all, except: [:password, :created_at, :updated_at], status: :ok
  end

  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, except: [:password, :created_at, :updated_at], status: :ok
    else
      render json: { error: "user not found" }, status: :not_found
    end
  end

  def create
    byebug
    user = User.create(user_params)
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :email, :password, :first_name, :last_name, :profession, :github)
  end
end
