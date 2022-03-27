class CategoriesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  wrap_parameters format: []

  def index
    if params[:project_id]
      project = find_project
      categories = project.categories
    else
      categories = Category.all
    end
    render json: categories, status: :ok
  end

  def show
    category = find_category
    render json: category, status: :ok
  end

  def create
    category = Category.create(category_params)
    render json: category, status: :created
  end

  def destroy
    category = find_category
    category.destroy
    head :no_content
  end

  def update
    category = find_category
    category.update(category_params)
    render json: category, status: :accepted
  end

  private

  def category_params
    params.permit(:title, :description)
  end

  def find_category
    Category.find(params[:id])
  end

  def find_project
    Project.find(params[:project_id])
  end

  def render_not_found_response
    render json: { error: "category not found" }, status: :not_found
  end

end
