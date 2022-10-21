Rails.application.routes.draw do
  devise_for :accounts
  get 'casestudy/budget_countertops'
  get 'casestudy/Up_shift'
  get 'casestudy/builder' 
  get 'casestudy/cialfo'
  get 'casestudy/first_partition'
  get 'casestudy/gocurb'
  get 'casestudy/horticult'
  get 'casestudy/inkl'
  get 'casestudy/knotch'
  get 'casestudy/mission'
  get 'casestudy/person_app'
  get 'casestudy/roostify'

  get 'blogs', :to => 'blogs#index'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  get 'about_us', :to => 'home#about_us'
  get 'career', :to => 'home#career'
  get 'our_services', :to => 'home#our_services'
  get 'contact_us', :to => 'home#contact_us'
  get 'partnership', :to => 'home#partnership'
  get 'thank_you', :to => 'home#thank_you'
  get 'test', :to => 'home#test'
  get 'what_we_do', :to => 'home#what_we_do'
  get 'about_project', :to => 'home#about_project'
  get 'Up_shift', :to => 'home#Up_shift'
  get 'services/mobile_app_development', :to => 'services#mobile_app_development'
  get 'services/quality_assurance_consultancy', :to => 'services#quality_assurance_consultancy'
  get 'services/web_development', :to => 'services#web_development'
  get 'services/devops', :to => 'services#devops'

  #resources :services
  resources :users
  namespace :admin do
   resources :blogs
  end
end
