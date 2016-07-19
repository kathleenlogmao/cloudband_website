Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
 root to: "pages#index"

 post "/contact", to: "pages#contact"
 get "/portfolio", to: "pages#portfolio"
end
