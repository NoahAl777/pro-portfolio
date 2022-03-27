class AddProjectCategoryToProjects < ActiveRecord::Migration[7.0]
  def change
    add_reference :project, :project_category
  end
end
