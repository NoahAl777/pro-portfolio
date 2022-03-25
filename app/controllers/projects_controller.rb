class ProjectsController < ApplicationController

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      projects = user.projects
    else
    projects = Project.all
    end
    render json: projects, include: :user
  end

  def show
    if params[:user_id]
      user = User.find(params[:user_id])
      project = user.projects.find(params[:id])
    else
      project = Project.find(params[:id])
    end
    render json: project, include: :user
  end

  def create
    if params[:user_id]
      user = User.find(params[:user_id])
      project = user.projects.create(project_params)
    end
    render json: project, include: :user
  end
  
private

def project_params
  params.permit(:title, :description, :technologies, :github, :live_link)
end

def find_project
  Project.find(params[:id])
end

end
