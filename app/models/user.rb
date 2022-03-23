class User < ApplicationRecord

  def index
    users = User.all
    render json: users
  end
  
end
