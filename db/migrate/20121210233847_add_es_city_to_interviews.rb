class AddEsCityToInterviews < ActiveRecord::Migration
  def change
    add_column :refinery_interviews, :city_es, :string, :default => 'espanol city'
  end
end
