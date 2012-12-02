module Refinery
  module Interviews
    module Admin
      class InterviewsController < ::Refinery::AdminController

        crudify :'refinery/interviews/interview',
                :title_attribute => 'first_name', :xhr_paging => true
          def destroy
            @interview = ::Refinery::Interviews::Interview.find(params['id'])

            # raise @interview.inspect
            if @interview.delete
              flash.notice = t('destroyed', :scope => 'refinery.crudify', :what => "'#{@interview.first_name}'")
              redirect_to '/refinery/interviews'
            else
              redirect_to '/refinery/interviews'
            end
          end

      end
    end
  end
end
