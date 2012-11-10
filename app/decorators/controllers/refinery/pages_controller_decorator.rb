Refinery::PagesController.class_eval do
  before_filter :check_language

protected

  def check_language
    # ::I18n.locale = :en
  end

end