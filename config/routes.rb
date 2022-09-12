Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :users
  delete '/sessions', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'


  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'


  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
