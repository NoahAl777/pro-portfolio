class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :firstname, :lastname, :profession, :github

  has_many :projects
end
