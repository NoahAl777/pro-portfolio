class ApplicationController < ActionController::API
include ActionController::Cookies
  before_action :authorized?

  def current_user
    # byebug
    @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
  end

  def authorized?
    # byebug
    return render json: {error: "Not authorized"} unless current_user
  end
end
