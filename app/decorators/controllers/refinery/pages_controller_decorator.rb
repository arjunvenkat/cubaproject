Refinery::PagesController.class_eval do
  before_filter :gon_vars

protected

  def gon_vars
    @interviews = ::Refinery::Interviews::Interview.all
    interview_markers = []
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
    end

    gon.interview_markers = interview_markers
  end

end