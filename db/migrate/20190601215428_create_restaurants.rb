class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :zip, null: false
      t.float :lat, null: false
      t.float :lon, null: false
      t.string :phone_number, null: false
      t.string :price_range, null: false
      t.text :description, null: false
      t.integer :cuisine_id
      t.time :open_time, null: false
      t.time :close_time, null: false
      t.integer :capacity, null: false

      t.timestamps
    end

    add_index :restaurants, :city
    add_index :restaurants, :zip
    add_index :restaurants, :price_range
  end
end
