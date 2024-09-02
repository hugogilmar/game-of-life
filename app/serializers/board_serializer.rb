class BoardSerializer < ActiveModel::Serializer
  attributes :id, :name, :cells, :stage, :created_at, :updated_at

  def stage
    object.stage.number
  end

  def cells
    object.stage.cells
  end

  def updated_at
    object.stage.created_at
  end
end
