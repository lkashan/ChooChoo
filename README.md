# Choo-Choo: Your Own Personal Hype-Train :steam_locomotive:

### Description:
ChooCoo is pro-social empathetic engagement app based on scientific research of the relationship between generosity and happiness to facilitate a cycle of public accolades and corresponding charitable donations. Choo-Choo is designed to combat the paradigm of self-serving behavior and isolation that plagues our culture. Members of the community can send out their own personal "hype-train" of public praise and superlatives to via a user's profile page, and their positive social engagement is then correspondingly rewarded via a donation to a user' selected charity in the sender’s name. Good samaritans in the community will receive a text notification when someone has sent them a hype-train, along with a link to the donation page of their charity to make good on their pledge. **Texts can only be sent to Twilio verified numbers**

#### Local Setup
- Download/clone repository
- In terminal, run:
```
  bundle install
  yarn install
  bundle exec rake db:create
  bundle exec rake db:migrate
  yarn run start
 ```
- Open second terminal window, run:
```
  rails s
```
- In browser, navigate to: localhost:3000

#### Tech Specs
- Ruby 2.6.5
- Rails - 5.2.3
- React - 16.8.0
- PostgreSQL
- Foundation
- Devise
