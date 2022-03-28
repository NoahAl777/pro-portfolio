class ProjectCategoriesController < ApplicationController
  
  private

  def render_not_found_response
    render json: { error: "project category not found" }, status: :not_found
  end
end