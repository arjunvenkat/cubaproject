Refinery::PagesController.class_eval do
  before_filter :gon_vars

protected

  def gon_vars
    @interviews = ::Refinery::Interviews::Interview.find(:all, :order => 'first_name')
    interview_markers = []
    interview_markers_es = []
    @interviews.each do |interview|
      marker = [
                interview.full_name,
                interview.latitude,
                interview.longitude,
                interview.address,
                interview.date_of_entry,
                interview.full_name.parameterize
               ]
      picture = ::Refinery::Image.find_by_id(interview.picture_id)
      marker << picture.try(:url)
      interview_markers << marker

      marker_es = [
                interview.full_name,
                interview.latitude,
                interview.longitude,
                interview.address_es,
                interview.date_of_entry_es,
                interview.full_name.parameterize
               ]
      marker_es << picture.try(:url)
      interview_markers_es << marker_es


    end
    @spanish = ::I18n.locale == :es

    gon.spanish = @spanish
    gon.interview_markers = interview_markers
    gon.interview_markers_es = interview_markers_es
  end

end