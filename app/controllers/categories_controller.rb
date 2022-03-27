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

  def render_not_found_response
    render json: { error: "project not found" }, status: :not_found
  end
  
end
