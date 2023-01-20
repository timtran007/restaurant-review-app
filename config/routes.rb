Rails.application.routes.draw do
  resources :reviews
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :restaurants, only: [:index]
  resources :user, only: [:index, :create, :show]
  # Defines the root path route ("/")
  # root "articles#index"
  
end
