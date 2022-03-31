class Category < ApplicationRecord
  has_many :project_categories
  has_many :projects, through: :project_categories

  validates :title, presence: :true
  validates :title, length: {in: 5..40}
end
