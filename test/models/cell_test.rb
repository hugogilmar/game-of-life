require "test_helper"

class CellTest < ActiveSupport::TestCase
  setup do
    @board = boards(:one)
    @cell = @board.cell_at(0, 0)
  end

  test "belongs to a board" do
    assert_instance_of Board, @cell.board
  end

  test "has many neighbours" do
    assert_instance_of Cell, @cell.neighbours.first
  end

  test "has many live neighbours" do
    assert_instance_of Cell, @cell.live_neighbours.first
  end

  test "dead? returns true if dead" do
    @cell.dead!
    assert @cell.dead?
  end

  test "dead? returns false if live" do
    @cell.live!
    refute @cell.dead?
  end

  test "live? returns true if live" do
    @cell.live!
    assert @cell.live?
  end

  test "live? returns false if dead" do
    @cell.dead!
    refute @cell.live?
  end

  test "toggle! changes live to dead" do
    @cell.live!
    @cell.toggle!
    assert @cell.dead?
  end

  test "toggle! changes dead to live" do
    @cell.dead!
    @cell.toggle!
    assert @cell.live?
  end
end