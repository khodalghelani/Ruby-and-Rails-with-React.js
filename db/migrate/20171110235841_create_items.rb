class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.string :author
      t.string :tag
      t.date :created_at
      t.date :updated_at

      t.timestamps
    end
  end
end
