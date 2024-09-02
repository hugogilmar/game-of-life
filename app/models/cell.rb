class Cell
  attr_reader :board, :x, :y
  def initialize(board, x, y, live)
    @board, @x, @y, @live = board, x, y, live
  end

  def dead?
    !@live
  end

  def dead!
    @live = false
  end

  def live?
    @live
  end

  def live!
    @live = true
  end

  def toggle!
    @live = !@live
  end

  def neighbours
    neighbours = []
    neighbours.push(@board.cell_at(x - 1, y - 1))
    neighbours.push(@board.cell_at(x - 1, y))
    neighbours.push(@board.cell_at(x - 1, y + 1))

    neighbours.push(@board.cell_at(x, y - 1))
    neighbours.push(@board.cell_at(x, y + 1))

    neighbours.push(@board.cell_at(x + 1, y - 1))
    neighbours.push(@board.cell_at(x + 1, y))
    neighbours.push(@board.cell_at(x + 1, y + 1))

    neighbours.compact!
    neighbours
  end

  def live_neighbours
    neighbours.select do |n|
        n && n.live?
    end
  end
end
