class UsersController < ApplicationController
  wrap_parameters format: []

  def index
    render json: User.all, except: [:password, :created_at, :updated_at], status: :ok
  end

  def show
    user = find_user
    if user
      render json: user, except: [:password, :created_at, :updated_at], status: :ok
    else
      render_not_found_response
    end
  end

  def create
    user = find_user
    render json: user, status: :created
  end

  def destroy
    user = find_user
    if user
      user.destroy
    else
      render_not_found_response
    end
  end

  def update
    user = find_user
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

  def find_user
    User.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "user not found" }, status: :not_found
  end
end
