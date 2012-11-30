class AddEspanolToInterviews < ActiveRecord::Migration
  def change
    add_column :refinery_interviews, :description_es, :text
  end
end
