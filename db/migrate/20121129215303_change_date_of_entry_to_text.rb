class ChangeDateOfEntryToText < ActiveRecord::Migration
  def change
    change_column :refinery_interviews, :date_of_entry, :string
  end
end

