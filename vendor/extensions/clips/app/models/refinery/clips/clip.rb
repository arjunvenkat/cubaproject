module Refinery
  module Clips
    class Clip < Refinery::Core::BaseModel
      self.table_name = 'refinery_clips'

      attr_accessible :name, :length, :file_id, :position

      acts_as_indexed :fields => [:name, :length]

      validates :name, :presence => true, :uniqueness => true

      belongs_to :file, :class_name => '::Refinery::Resource'
    end
  end
end
