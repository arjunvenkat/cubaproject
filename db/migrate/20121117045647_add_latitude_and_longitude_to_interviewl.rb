class AddLatitudeAndLongitudeToInterviewl < ActiveRecord::Migration
  def change
    add_column :refinery_interviews, :latitude, :float
    add_column :refinery_interviews, :longitude, :float
  end
end
