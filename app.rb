require 'sinatra'
require_relative 'lib/cache'

github = GithubCache.new

get '/' do 
  haml :index
end

get '/repositories/:language' do
  language = params[:language]
  github.most_starred(language).to_json
end
