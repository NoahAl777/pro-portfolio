class Category < ApplicationRecord
  has_many :project_categories
  has_many :projects, through: :project_categories

  validates :title, length: {in: 5..40}, allow_blank: false
  validates :description, length: {in: 20..400}, allow_blank: false
end
