class NameGenerator
  class << self
    def call
      # Generate a random name
      flip = RandomNameGenerator.flip_mode
      flip.compose(3).parameterize
    end
  end
end