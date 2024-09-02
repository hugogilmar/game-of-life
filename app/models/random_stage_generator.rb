class RandomStageGenerator
  class << self
    def call(board)
      sample_cells = Array.new(BOARD_COLS) { Array.new(BOARD_ROWS) { [0, 1].sample } }
      board.stages.create!(cells: sample_cells)
    end
  end
end