class Board < ApplicationRecord
  BOARD_COLS = 50
  BOARD_ROWS = 50

  has_many :stages, dependent: :destroy
  before_create :set_name
  accepts_nested_attributes_for :stages

  def cells
    @cells ||= stage.object_cells
  end

  def cell_at(x, y)
    return if x.negative? || y.negative?
    
    if cells[x]
      cells[x][y]
    end
  end

  def stage
    stages.count > 0 ? stages.latest : random_next_stage!
  end

  def random_next_stage!
    RandomStageGenerator.call(self)
    @cell = nil
  end

  def next_stage!
    StageGenerator.call(self)
    @cell = nil
  end

  def next_stages!(number)
    number.times do
      next_stage!
    end
  end

  private

  def set_name
    return if name.present?
    self.name = NameGenerator.call
  end
end
