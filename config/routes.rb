Rails.application.routes.draw do
  resources :reviews
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :restaurants, only: [:index]
  

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  # Defines the root path route ("/")
  # root "articles#index"
  
end
