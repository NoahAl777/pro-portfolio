class Project < ApplicationRecord
  belongs_to :user
  has_many :project_categories
  has_many :categories, through: :project_categories

  validates :title, presence: true
  validates :description, length: {in: 10..1000}
end
