class ApplicationController < ActionController::Base
  if defined? Clearance
    include Clearance::Controller
  end
end
