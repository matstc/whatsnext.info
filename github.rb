require 'open-uri'
require 'json'

module Github
  def self.most_starred language
    url = "https://api.github.com/search/repositories?q=language:#{language}&sort=stars&order=desc"
    data = JSON.parse open(url).read
    data['items'].map{|repo| repo.keep_if{|k,v| ['name', 'full_name', 'owner', 'stargazers_count', 'html_url', 'description'].include? k }}
  end
end

