Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do    
    namespace :v1 do
      post 'users/search', to: 'users#search'
      resources :landings, only: [:index] 
      resources :users, only: [:index, :new, :show] do
        resources :accolades, only: [:index, :new, :create]
      end
    end
  end  

  get '*page', to: 'homes#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
