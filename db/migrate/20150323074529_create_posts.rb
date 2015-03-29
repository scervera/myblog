class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :subtitle
      t.string :author
      t.text :content
      t.boolean :publish

      t.timestamps
    end
  end
end
