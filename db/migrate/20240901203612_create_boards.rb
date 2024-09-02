class CreateBoards < ActiveRecord::Migration[7.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false, limit: 120
      t.timestamps
    end
  end
end
