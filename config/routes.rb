Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index, :show, :create, :update, :destroy] do
      resources :projects, only: [:index, :show, :create, :update, :destroy]
    end
    
    resources :projects, only: [:index, :show, :update, :destroy] do
      resources :categories, only: [:index, :show, :create, :destroy]
    end

    resources :categories, only: [:index, :show, :create, :update, :destroy]

    get "/me", to:"users#me"
    post "/login", to:"sessions#create"
    delete "/logout", to: "sessions#destroy"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
