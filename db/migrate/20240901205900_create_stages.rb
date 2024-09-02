class CreateStages < ActiveRecord::Migration[7.2]
  def change
    create_table :stages do |t|
      t.references :board, null: false, foreign_key: true
      t.integer :number, default: 0
      t.integer :cells, array: true, default: []
      t.timestamps
    end
  end
end
