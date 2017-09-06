Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resource :session, only: [:create, :destroy]
    resources :homes, only: [:index, :show, :create]
    resources :trips, only: [:create, :destroy, :index, :show]
    resources :reviews, only: [:create, :index]
  end

end
