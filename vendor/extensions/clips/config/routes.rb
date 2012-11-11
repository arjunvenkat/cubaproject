Refinery::Core::Engine.routes.append do

  # Frontend routes
  namespace :clips do
    resources :clips, :path => '', :only => [:index, :show]
  end

  # Admin routes
  namespace :clips, :path => '' do
    namespace :admin, :path => 'refinery' do
      resources :clips, :except => :show do
        collection do
          post :update_positions
        end
      end
    end
  end

end
