
FactoryGirl.define do
  factory :interview, :class => Refinery::Interviews::Interview do
    sequence(:first_name) { |n| "refinery#{n}" }
  end
end

