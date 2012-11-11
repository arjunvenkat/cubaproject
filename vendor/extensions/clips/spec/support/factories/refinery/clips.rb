
FactoryGirl.define do
  factory :clip, :class => Refinery::Clips::Clip do
    sequence(:name) { |n| "refinery#{n}" }
  end
end

