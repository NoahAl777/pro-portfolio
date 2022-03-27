class Project < ApplicationRecord
  belongs_to :user
  has_many :categories, through: :project_categories
end
