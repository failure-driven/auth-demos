class AuthWithClearanceController < ApplicationController
  before_action :require_login
end
