# encoding: utf-8
require "spec_helper"

describe Refinery do
  describe "Clips" do
    describe "Admin" do
      describe "clips" do
        login_refinery_user

        describe "clips list" do
          before do
            FactoryGirl.create(:clip, :name => "UniqueTitleOne")
            FactoryGirl.create(:clip, :name => "UniqueTitleTwo")
          end

          it "shows two items" do
            visit refinery.clips_admin_clips_path
            page.should have_content("UniqueTitleOne")
            page.should have_content("UniqueTitleTwo")
          end
        end

        describe "create" do
          before do
            visit refinery.clips_admin_clips_path

            click_link "Add New Clip"
          end

          context "valid data" do
            it "should succeed" do
              fill_in "Name", :with => "This is a test of the first string field"
              click_button "Save"

              page.should have_content("'This is a test of the first string field' was successfully added.")
              Refinery::Clips::Clip.count.should == 1
            end
          end

          context "invalid data" do
            it "should fail" do
              click_button "Save"

              page.should have_content("Name can't be blank")
              Refinery::Clips::Clip.count.should == 0
            end
          end

          context "duplicate" do
            before { FactoryGirl.create(:clip, :name => "UniqueTitle") }

            it "should fail" do
              visit refinery.clips_admin_clips_path

              click_link "Add New Clip"

              fill_in "Name", :with => "UniqueTitle"
              click_button "Save"

              page.should have_content("There were problems")
              Refinery::Clips::Clip.count.should == 1
            end
          end

        end

        describe "edit" do
          before { FactoryGirl.create(:clip, :name => "A name") }

          it "should succeed" do
            visit refinery.clips_admin_clips_path

            within ".actions" do
              click_link "Edit this clip"
            end

            fill_in "Name", :with => "A different name"
            click_button "Save"

            page.should have_content("'A different name' was successfully updated.")
            page.should have_no_content("A name")
          end
        end

        describe "destroy" do
          before { FactoryGirl.create(:clip, :name => "UniqueTitleOne") }

          it "should succeed" do
            visit refinery.clips_admin_clips_path

            click_link "Remove this clip forever"

            page.should have_content("'UniqueTitleOne' was successfully removed.")
            Refinery::Clips::Clip.count.should == 0
          end
        end

      end
    end
  end
end
