module Refinery
  module Clips
    module Admin
      class ClipsController < ::Refinery::AdminController

        crudify :'refinery/clips/clip',
                :title_attribute => 'name', :xhr_paging => true

      end
    end
  end
end
