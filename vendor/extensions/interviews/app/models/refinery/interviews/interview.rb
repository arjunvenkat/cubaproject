module Refinery
  module Interviews
    class Interview < Refinery::Core::BaseModel
      self.table_name = 'refinery_interviews'

      attr_accessible :first_name, :last_name, :city, :date_of_entry, :description, :description_es, :picture_id, :position

      acts_as_indexed :fields => [:first_name, :last_name, :city, :description, :description_es]

      belongs_to :picture, :class_name => '::Refinery::Image'
      has_many :clips, :class_name => '::Refinery::Clips::Clip', :dependent => :destroy

      geocoded_by :address
      after_validation :geocode

      validates :first_name, :presence => true

      def full_name
        "#{first_name} #{last_name}"
      end

      def address
        "#{city}, Cuba"
      end

      def clips
        clips_array = []
        ::Refinery::Clips::Clip.all.each do |clip|
          if clip.interview_id == self.id
            clips_array << clip
          end
        end
        return clips_array
      end


    end
  end
end
