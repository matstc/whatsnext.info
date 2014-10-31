class Whatsnext
  class << self
    def github
      @github ||= Github.new("matstc/whatsnext.info")
    end

    def contributors
      github.contributors
    end
  end
end