require "test_helper"

class BoardTest < ActiveSupport::TestCase
  setup do
    @board = boards(:one)
  end

  test "has many stages" do
    assert_instance_of Stage, @board.stages.first
  end

  test "has many cells" do
    assert_instance_of Cell, @board.cells.flatten.first
  end

  test "has a stage" do
    assert_instance_of Stage, @board.stage
  end

  test "cell_at returns nil for out of bounds" do
    assert_nil @board.cell_at(-1, -1)
  end

  test "cell_at returns a cell" do
    assert_instance_of Cell, @board.cell_at(0, 0)
  end

  test "random_next_stage! creates a new stage" do
    assert_difference "@board.stages.count" do
      @board.random_next_stage!
    end
  end

  test "next_stage! creates a new stage" do
    old_number = @board.stage.number
    assert_difference "@board.stages.count" do
      @board.next_stage!
    end
    assert_equal old_number + 1, @board.stage.number
  end

  test "next_stages! creates multiple new stages" do
    assert_difference "@board.stages.count", 3 do
      @board.next_stages!(3)
    end
  end
end
