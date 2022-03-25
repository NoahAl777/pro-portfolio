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

private

def find_project
  Project.find(params[:id])
end

end
