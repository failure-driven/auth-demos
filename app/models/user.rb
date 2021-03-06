class User < ApplicationRecord
  if defined? Clearance
    include Clearance::User
  end

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  if defined? Devise
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :validatable
  end
end
