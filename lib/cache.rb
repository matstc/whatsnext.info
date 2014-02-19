require_relative 'github'
require 'timeout_cache'

class GithubCache
  def initialize timeout: 600
    @cache = TimeoutCache.new timeout
    @github = Github.new
  end

  def most_starred language
    if @cache[language].nil?
      puts "Caching response for: #{language}"
      @cache.set(language, @github.most_starred(language))
    else
      puts "Serving cached response for: #{language}"
    end

    @cache[language]
  end
end

