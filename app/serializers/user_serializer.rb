class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :donation_pledge, :charity_1, :charity_1_link
  
  has_many :brews
end