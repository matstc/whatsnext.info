require 'sinatra'
require_relative 'lib/cache'
require_relative 'lib/resource'
require_relative 'lib/whatsnext'

configure :production do
  require 'newrelic_rpm'
end

github = GithubCache.new

get '/' do
  haml :index
end

get '/repositories/:language' do
  language = params[:language]
  github.most_starred(language).to_json
end

get '/resources/:language' do
  language = params[:language]
  Resource.fetch(language).to_json
end
