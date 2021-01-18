require 'twilio-ruby'

class Accolade < ApplicationRecord
  validates :body, presence: true
  validates :nominator, presence: true

  belongs_to :user 

  def send_sms
    user_number = self.user.phone_number
    formatted_user_number = phone_number.split("-").unshift("+1").join()
    
    @twilio_number = ENV['TWILIO_NUMBER']
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    @client = Twilio::REST::Client.new(account_sid, auth_token)
    body = "CHOOCHOO! Hype train rolling in! #{self.nominator} says '#{self.body}' 
    Time to make good on your donation pledge to #{self.user.charity_1}: #{self.user.charity_1_link}"

    message = @client.messages.create(
      :from => @twilio_number,
      :to => formated_user_number,
      :body => body,
    )
  end
end