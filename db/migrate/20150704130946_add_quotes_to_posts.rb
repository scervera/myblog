class AddQuotesToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :quote_author, :string
    add_column :posts, :quote_source, :string
    add_column :posts, :quote_text, :text
  end
end
