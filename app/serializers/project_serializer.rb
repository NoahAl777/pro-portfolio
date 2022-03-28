class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :technologies, :github, :live_link, :created_at

  belongs_to :user
  has_many :categories
end
