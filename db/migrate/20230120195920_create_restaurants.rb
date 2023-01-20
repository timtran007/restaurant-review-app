class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :image_url
      t.string :cuisine
      t.integer :price

      t.timestamps
    end
  end
end
