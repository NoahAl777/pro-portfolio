Rails.application.routes.draw do
  resources :categories

  resources :users, only: [:index, :show, :create, :update, :destroy] do
    resources :projects, only: [:index, :show, :create, :update, :destroy]
  end

  resources :projects, only: [:index, :show, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
