require 'html-proofer'

task :test do
  sh "gulp stylus"
  sh "gulp build"

  HTMLProofer.check_directory("./_site", {:disable_external => true, :verbose => true, :only_4xx => true}).run
end
