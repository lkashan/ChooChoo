require 'twilio-ruby'

class Accolade < ApplicationRecord
  validates :body, presence: true
  # validates :chosen_charity, presence: true
  validates :nominator, presence: true

  belongs_to :user # the one that got nominated
# belongs_to :nominator, class_name: "User", foreign_key: "nominator_id", optional: true

  def send_sms
    user_number = self.user.phone_number
    formatted_user_number = phone_number.split("-").unshift("+1").join()
    
    @twilio_number = +12565593055
    account_sid = 'AC1ccec4e1517250d7e81fea82eca52ed6'
    auth_token = 'b813e68c1594eebfc5036ed2f3fe6d4e'
    @client = Twilio::REST::Client.new(account_sid, auth_token)
    body = "test"

    message = @client.messages.create(
      :from => @twilio_number,
      :to => formated_user_number,
      :body => body,
    )
  end
end