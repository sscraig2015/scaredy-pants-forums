class AddForeignKeyToPost < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :topic
  end
end
