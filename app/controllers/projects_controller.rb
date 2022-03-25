class ProjectsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      projects = user.projects
    else
      projects = Project.all
    end
    render json: projects, include: :user, status: :ok
  end

  def show
    project = find_project
    render json: project, include: :user, status: :ok
  end

  def create
    user = User.find(params[:user_id])
    project = user.projects.create(project_params)
    render json: project, include: :user, status: :created
  end

  def destroy
    project = find_project
    project.destroy
    head :no_content
  end

  def update
    project = find_project
    project.update(project_params)
    render json: project, include: :user, status: :accepted
  end

private

def project_params
  params.permit(:title, :description, :technologies, :github, :live_link)
end

def find_project
  Project.find(params[:id])
end

def find_user
  User.find(params[:user_id])
end

def render_not_found_response
  render json: { error: "project not found" }, status: :not_found
end

end
