class UsersController < ApplicationController
  wrap_parameters format: []

  def index
    render json: User.all, except: [:password, :created_at, :updated_at], status: :ok
  end

  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, except: [:password, :created_at, :updated_at], status: :ok
    else
      render_not_found_response
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
      render_not_found_response
    end
  end

  def update
    user = User.find_by(id: params[:id])
    if user
      user.update(user_params)
      render json: user, status: :accepted
    else
      render_not_found_response
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password, :firstname, :lastname, :profession, :github)
  end

  def render_not_found_response
    render json: { error: "user not found" }, status: :not_found
  end
end
