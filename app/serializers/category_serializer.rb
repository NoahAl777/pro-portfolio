class CategorySerializer < ActiveModel::Serializer
  attributes :title, :description

  has_many :projects
end
