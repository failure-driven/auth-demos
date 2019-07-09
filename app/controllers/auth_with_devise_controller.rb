class AuthWithDeviseController < ApplicationController
  if defined? Devise
    before_action :authenticate_user!
  end
end
