module Refinery
  module Interviews
    class Interview < Refinery::Core::BaseModel
      self.table_name = 'refinery_interviews'

      attr_accessible :first_name, :last_name, :city, :date_of_entry, :description, :picture_id, :position

      acts_as_indexed :fields => [:first_name, :last_name, :city, :description]

      validates :first_name, :presence => true, :uniqueness => true

      belongs_to :picture, :class_name => '::Refinery::Image'
    end
  end
end
