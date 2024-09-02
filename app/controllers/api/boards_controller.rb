module Api
  class BoardsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: :create
    before_action :find_board, only: [:show, :next]

    def index
      @boards = Board.all
      render json: @boards
    end

    def create
      @board = Board.new
      
      if @board.save
        @board.random_next_stage!
        render json: @board, status: :created
      else
        render json: @board.errors, status: :unprocessable_entity
      end
    end

    def show
      render json: @board
    end

    def next
      if params[:number] && params[:number].to_i > 0
        @board.next_stages!(params[:number].to_i)
      else
        @board.next_stage!
      end

      @board.reload
      
      render json: @board
    end

    private

    def find_board
      @board = Board.find(params[:id])
    end
  end
end