class CreateProjectCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :project_categories do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
