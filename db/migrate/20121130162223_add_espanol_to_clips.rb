class AddEspanolToClips < ActiveRecord::Migration
  def change
    add_column :refinery_clips, :name_es, :string
  end
end
