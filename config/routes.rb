Rails.application.routes.draw do
  resources :reviews
  resources :restaurants, only: [:index, :show]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/user-reviews', to: 'users#user_reviews'
  # get '/users', to: 'users#index'
  # Defines the root path route ("/")
  # root "articles#index"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
