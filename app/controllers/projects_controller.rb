class ProjectsController < ApplicationController

private

def find_project
  project = Project.find(params[:id])
end

end
