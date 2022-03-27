class AddProjectCategoryToCategory < ActiveRecord::Migration[7.0]
  def change
    add_reference :categories, :project_category
  end
end
