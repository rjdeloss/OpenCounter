class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id 
      t.integer :restaurant_id
      t.integer :overall_rating
      t.integer :food_rating
      t.integer :service_rating
      t.integer :ambiance_rating
      t.integer :value_rating
      t.integer :noise_level
      t.integer :recommended, default: 0
      t.text :body

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :restaurant_id
  end
end
