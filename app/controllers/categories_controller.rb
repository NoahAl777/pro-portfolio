class CategoriesController < ApplicationController

  
  def index
    categories = Category.all
    render json: categories, status: :ok
  end

  private

  def category_params
    params.permit(:title, :description)
  end

  def find_category
    Category.find(params[:id])
  end
end
