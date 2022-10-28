class Api::CategoriesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  skip_before_action :authorized?, only: [:index, :show]
  wrap_parameters format: []

  def index
    # byebug
    if params[:project_id]
      project = find_project
      categories = project.categories
    else
      categories = Category.all
    end
    render json: categories, status: :ok
  end

  def show
    if params[:project_id]
      project = find_project
      category = project.categories.find(params[:id])
    else
      category = find_category
    end
    render json: category, status: :ok
  end

  def create
    if params[:project_id]
      ProjectCategory.create(project_id: params[:project_id], category_id: params[:category_id])
      category = Category.find(params[:category_id])
    else
      category = Category.create!(category_params)
    end
    render json: category, status: :created
  end

  def destroy
    if params[:project_id]
      category = ProjectCategory.find_by(project_id: params[:project_id], category_id: params[:id] )
    else
      category = find_category
    end
    category.destroy
    head :no_content
  end

  def update
    category = find_category
    category.update!(category_params)
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

  def render_unprocessable_entity(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end
end
