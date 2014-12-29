class AddDetailsToBlog < ActiveRecord::Migration
  def change
    add_column :blogs, :title, :text
    add_column :blogs, :subtitle, :text
    add_column :blogs, :author, :string
    add_column :blogs, :publish, :boolean
    add_column :blogs, :content, :text
  end
end
