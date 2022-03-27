class Category < ApplicationRecord
  has_many :projects, through: :project_categories
end
