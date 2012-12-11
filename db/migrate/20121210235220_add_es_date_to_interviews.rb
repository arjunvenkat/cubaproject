class AddEsDateToInterviews < ActiveRecord::Migration
  def change
    add_column :refinery_interviews, :date_of_entry_es, :string, :default => 'espanol date'
  end
end

