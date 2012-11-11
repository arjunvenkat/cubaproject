module Refinery
  module Clips
    class Engine < Rails::Engine
      include Refinery::Engine
      isolate_namespace Refinery::Clips

      engine_name :refinery_clips

      initializer "register refinerycms_clips plugin" do
        Refinery::Plugin.register do |plugin|
          plugin.name = "clips"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.clips_admin_clips_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/clips/clip',
            :title => 'name'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::Clips)
      end
    end
  end
end
