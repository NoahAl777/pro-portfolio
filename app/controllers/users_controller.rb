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
    user = User.create(user_params)
    render json: user, status: :created
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
    else
      render json: { error: "user not found" }, status: :not_found
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password, :firstname, :lastname, :profession, :github)
  end
end
