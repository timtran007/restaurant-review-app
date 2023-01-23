Rails.application.routes.draw do
  resources :reviews
  resources :restaurants, only: [:index, :show]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  # Defines the root path route ("/")
  # root "articles#index"
  
end
