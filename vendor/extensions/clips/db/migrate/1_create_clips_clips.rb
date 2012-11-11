class CreateClipsClips < ActiveRecord::Migration

  def up
    create_table :refinery_clips do |t|
      t.string :name
      t.string :length
      t.integer :file_id
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-clips"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/clips/clips"})
    end

    drop_table :refinery_clips

  end

end
