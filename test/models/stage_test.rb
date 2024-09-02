require "test_helper"

class StageTest < ActiveSupport::TestCase
  setup do
    @stage = stages(:one)
  end

  test "belongs to a board" do
    assert_instance_of Board, @stage.board
  end

  test "cells are converted to Cell objects" do
    cells = @stage.object_cells
    assert_instance_of Cell, cells.first.first
  end
end
