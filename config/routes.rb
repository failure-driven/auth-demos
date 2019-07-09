Rails.application.routes.draw do
  if defined? Devise
    devise_for :users,
      controllers: {
        sessions: 'devise_sessions'
      }
  end

  if defined? Clearance
    post '/session', to: 'clearance_sessions#create'
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :home, only: :index
  namespace :auth_with_devise do
    resources :home, only: :index
    resources :react, only: :index
    root to: "home#index"
  end

  namespace :auth_with_clearance do
    resources :home, only: :index
    resources :react, only: :index
    root to: "home#index"
  end

  root to: "home#index"
end
