require 'kramdown'

class Resource
  @@directory = "content"

  def self.directory= dir
    @@directory = dir
  end

  def self.fetch language
    resource = {}
    resource['in_one_sentence'] = to_html(language, "in_one_sentence.md")
    resource['for_beginners'] = to_html(language, "for_beginners.md")
    resource['for_experts'] = to_html(language, "for_experts.md")
    resource['interview_questions'] = to_html(language, "interview_questions.md")
    resource
  end

  def self.to_html language, file
    markdown = File.open("#{@@directory}/#{language}/#{file}", &:read)
    Kramdown::Document.new(markdown).to_html
  end
end
