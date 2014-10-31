require_relative 'github'
require 'timeout_cache'

class GithubCache
  def initialize timeout: 600
    @cache = TimeoutCache.new timeout
    @github = Github.new
  end

  def most_starred language
    retrieve_or_fetch :most_starred, language
  end

  def contributors repository
    retrieve_or_fetch :contributors, repository
  end

  def retrieve_or_fetch method_name, *arguments
    cache_key = "#{method_name}:#{arguments}"

    if @cache[cache_key].nil?
      puts "Caching response for: #{cache_key}"
      @cache.set(cache_key, @github.public_send(method_name, *arguments))
    else
      puts "Serving cached response for: #{cache_key}"
    end

    @cache[cache_key]
  end
end

