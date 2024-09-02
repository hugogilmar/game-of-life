class StageGenerator
  attr_reader :board, :stage, :cells

  class << self
    def call(board)
      stage = board.stage
      cells = stage.object_cells

      affected = []

      cells.flatten.each do |cell|
        if (cell.live? && (cell.live_neighbours.length < 2 || cell.live_neighbours.length > 3)) || (cell.dead? && cell.live_neighbours.length == 3)
          affected.push cell
        end
      end

      affected.each(&:toggle!)

      board.stages.create!(cells: cells_to_values(cells), number: stage.number + 1)
    end

    private

    def cells_to_values(cells)
      cells.map do |row|
        row.map do |cell|
          cell.live? ? 1 : 0
        end
      end
    end
  end
end
