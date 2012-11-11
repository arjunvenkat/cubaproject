module Refinery
  module Clips
    class ClipsController < ::ApplicationController

      before_filter :find_all_clips
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @clip in the line below:
        present(@page)
      end

      def show
        @clip = Clip.find(params[:id])

        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @clip in the line below:
        present(@page)
      end

    protected

      def find_all_clips
        @clips = Clip.order('position ASC')
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/clips").first
      end

    end
  end
end
