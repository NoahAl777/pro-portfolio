class CategoriesController < ApplicationController

  
  def index
    categories = Category.all
    render json: categories, status: :ok
  end

  private

  def find_category
    Category.find(params[:id])
  end
end
