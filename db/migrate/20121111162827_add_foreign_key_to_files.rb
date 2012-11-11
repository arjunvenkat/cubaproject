class AddForeignKeyToFiles < ActiveRecord::Migration
  def change
    add_column :refinery_clips, :interview_id, :integer
  end
end
