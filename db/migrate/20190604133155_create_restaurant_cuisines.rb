class CreateRestaurantCuisines < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_cuisines do |t|
      t.integer :restaurant_id, null: false
      t.integer :cuisine_id, null: false
      t.timestamps
    end
  end
end
