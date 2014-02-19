require 'sinatra'
require_relative 'github'

get '/' do 
  haml :index
end

get '/repositories/:language' do
  language = params[:language]
  Github::most_starred(language).to_json
end
