require 'spec_helper'

module Refinery
  module Interviews
    describe Interview do
      describe "validations" do
        subject do
          FactoryGirl.create(:interview,
          :first_name => "Refinery CMS")
        end

        it { should be_valid }
        its(:errors) { should be_empty }
        its(:first_name) { should == "Refinery CMS" }
      end
    end
  end
end
