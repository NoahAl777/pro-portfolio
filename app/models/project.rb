class Project < ApplicationRecord
  belongs_to :user
  has_many :project_categories
  has_many :categories, through: :project_categories
end
