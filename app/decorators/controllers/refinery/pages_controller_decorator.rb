Refinery::PagesController.class_eval do
  before_filter :gon_vars

protected

  def gon_vars
    @interviews = ::Refinery::Interviews::Interview.find(:all, :order => 'first_name')
    @most_recent_interview = ::Refinery::Interviews::Interview.last
    interview_markers = []
    interview_markers_es = []
    most_recent_interview_marker = []
    most_recent_interview_marker_es = []
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
      most_recent_interview_marker = [
                @most_recent_interview.full_name,
                @most_recent_interview.latitude,
                @most_recent_interview.longitude,
                @most_recent_interview.address,
                @most_recent_interview.date_of_entry,
                @most_recent_interview.full_name.parameterize
               ]
      picture = ::Refinery::Image.find_by_id(@most_recent_interview.picture_id)
      most_recent_interview_marker << picture.try(:url)


      most_recent_interview_marker_es = [
                @most_recent_interview.full_name,
                @most_recent_interview.latitude,
                @most_recent_interview.longitude,
                @most_recent_interview.address_es,
                @most_recent_interview.date_of_entry_es,
                @most_recent_interview.full_name.parameterize
               ]
      most_recent_interview_marker_es << picture.try(:url)
    @spanish = ::I18n.locale == :es

    gon.spanish = @spanish
    gon.interview_markers = interview_markers
    gon.interview_markers_es = interview_markers_es
    gon.most_recent_interview_marker = [most_recent_interview_marker]
    gon.most_recent_interview_marker_es = [most_recent_interview_marker_es]
  end

end
