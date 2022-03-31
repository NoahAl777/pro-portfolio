class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  wrap_parameters format: []

  def index
    render json: User.all, status: :ok
  end

  def show
    user = find_user
    render json: user, except: [:password, :created_at, :updated_at], status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def destroy
    user = find_user
    user.destroy
  end

  def update
    user = find_user
    user.update(user_params)
    render json: user, status: :accepted
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

  def render_unprocessable_entity(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end
end
