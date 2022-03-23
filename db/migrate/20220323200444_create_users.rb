class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password
      t.string :firstname
      t.string :lastname
      t.string :profession
      t.string :github

      t.timestamps
    end
  end
end
