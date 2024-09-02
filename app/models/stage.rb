class Stage < ApplicationRecord
  belongs_to :board
  scope :latest, -> { order(created_at: :desc).first }

  def object_cells
    cells.map.with_index do |row, x|
      row.map.with_index do |col, y|
        Cell.new(board, x, y, col == 1)
      end
    end
  end
end
