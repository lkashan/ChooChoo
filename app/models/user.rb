class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :phone_number, format: { with: /\d{3}-\d{3}-\d{4}/, message: "format 123-456-7890" }
  validates :donation_pledge, presence: true
  validates :charity_1, presence: true
  validates :charity_1_link, presence: true

  has_many: accolades
end
