require 'open-uri'
require 'json'

class Github

  def initialize(repository)
    @repository = repository
    @base_uri   = "https://api.github.com/repos/#{repository}"
    @cache      = TimeoutCache.new 600
  end

  def contributors
    # ie : https://api.github.com/repos/matstc/whatsnext.info/contributors
    if @cache["contributors"].nil?
      url = "#{@base_uri}/contributors"
      collection = JSON.parse open(url).read
      collection = collection.map{|item| OpenStruct.new(item) }
      @cache.set("contributors", collection)
    else
      puts "Serve cache"
    end
    @cache["contributors"]
  end

  def self.most_starred language
    url = "https://api.github.com/search/repositories?q=language:#{language}&sort=stars&order=desc"
    puts "Fetching url: #{url}"
    data = JSON.parse open(url).read
    data['items'].map{|repo| repo.keep_if{|k,v| ['name', 'full_name', 'owner', 'stargazers_count', 'html_url', 'description'].include? k }}
  end

end

