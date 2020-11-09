class CreateAccolades < ActiveRecord::Migration[5.2]
  def change
    create_table :accolades do |t|
      t.string :nominator, null: false
      t.text :body, null: false
      # t.string :chosen_charity, null: false #this is going to be a dropdown menu populated with the user's charities that they specc'd when they made the profile
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end