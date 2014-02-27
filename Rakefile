desc 'Generates the files required for a new language'
task "language", :name do |t, args|
  language = args[:name]
  `mkdir content/#{language}`
  `echo "TBA" > content/#{language}/in_one_sentence.md`
  `echo "TBA" > content/#{language}/for_beginners.md`
  `echo "TBA" > content/#{language}/for_experts.md`
  `echo "TBA" > content/#{language}/interview_questions.md`
end

namespace "test" do
  def run_tests cmd
    pid, status = Process.wait2 Process::spawn(cmd, out:$stdout, err:$stderr)
    raise "Tests failed (#{cmd})" if status.exitstatus != 0
  end

  desc 'Runs coverage for javascript tests'
  task 'istanbul' do
    puts `istanbul cover --hook-run-in-context _mocha **/*spec.js -- -R spec`
    puts "Open coverage/lcov-report/index.html in a browser to see the results."
  end

  desc 'Runs javascript tests'
  task "js" do
    run_tests "mocha spec/js/*_spec.js"
  end

  desc 'Runs ruby tests'
  task "rb" do
    run_tests "ruby spec/rb/app_spec.rb"
  end

  desc 'Runs all tests'
  task 'all' => ['js','rb'] do
  end
end

task default: 'test:all'
