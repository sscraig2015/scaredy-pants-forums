Rails.application.routes.draw do
  resources :topics
  resources :comments
  resources :posts do
    resources :comments
  end
  resources :users

  # get '/users/:id', to 'users#profile'
  
  delete '/sessions', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'


  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'


  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
