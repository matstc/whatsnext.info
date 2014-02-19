require_relative '../../github'
require 'minitest/spec'
require 'minitest/autorun'

describe "Github" do
  it "memoizes by language" do
    skip
    github = Github.new
    calls = 0
    github.send(:define_singleton_method, "open") do |uri|
      calls += 1
      Class.new { def read; $DATA; end }.new
    end
    
    github.most_starred "ruby"
    calls.must_equal 1
    github.most_starred "ruby"
    calls.must_equal 1
    github.most_starred "javascript"
    calls.must_equal 2
    github.most_starred "javascript"
    calls.must_equal 2
  end

  it "fetches most starred repositories" do
    github = Github.new
    github.send(:define_singleton_method, "open") do |uri|
      Class.new { def read; $DATA; end }.new
    end
    most_starred = github.most_starred "ruby"
    most_starred.length.must_equal 1
    rails = most_starred[0]
    rails['name'].must_equal "rails"
    rails['full_name'].must_equal "rails/rails"
    rails['owner']['avatar_url'].must_equal "https://gravatar.com/avatar/30f39a09e233e8369dddf6feb4be0308?d=https%3A%2F%2Fidenticons.github.com%2Ff42a37d114a480b6b57b60ea9a14a9d2.png&r=x"
    rails['stargazers_count'].must_equal 20835
    rails['html_url'].must_equal "https://github.com/rails/rails"
    rails['description'].must_equal "Ruby on Rails"
  end
end

$DATA=<<EOF
{"total_count":514716,
"items":[{"id":8514,
"name":"rails",
"full_name":"rails/rails",
"owner":{"login":"rails",
  "id":4223,
  "avatar_url":"https://gravatar.com/avatar/30f39a09e233e8369dddf6feb4be0308?d=https%3A%2F%2Fidenticons.github.com%2Ff42a37d114a480b6b57b60ea9a14a9d2.png&r=x",
  "gravatar_id":"30f39a09e233e8369dddf6feb4be0308",
  "url":"https://api.github.com/users/rails",
  "html_url":"https://github.com/rails",
  "type":"Organization",
  "site_admin":false},
"private":false,
"html_url":"https://github.com/rails/rails",
"description":"Ruby on Rails",
"url":"https://api.github.com/repos/rails/rails",
"created_at":"2008-04-11T02:19:47Z",
"updated_at":"2014-02-19T10:30:19Z",
"pushed_at":"2014-02-19T10:30:18Z",
"git_url":"git://github.com/rails/rails.git",
"ssh_url":"git@github.com:rails/rails.git",
"clone_url":"https://github.com/rails/rails.git",
"svn_url":"https://github.com/rails/rails",
"homepage":"http://rubyonrails.org",
"size":255351,
"stargazers_count":20835,
"watchers_count":20835,
"language":"Ruby",
"has_issues":true,
"has_downloads":true,
"has_wiki":false,
"forks_count":7398,
"mirror_url":null,
"open_issues_count":713,
"forks":7398,
"open_issues":713,
"watchers":20835,
"default_branch":"master",
"score":1.0}]}
EOF
