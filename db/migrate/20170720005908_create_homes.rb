class CreateHomes < ActiveRecord::Migration[5.0]
  def change
    create_table :homes do |t|
      t.string :title
      t.string :description
      t.string :roomtype
      t.float :lat
      t.float :long
      t.integer :price
      t.integer :host_id, null: false
      t.string :address
      t.date :start_date
      t.date :end_date
      t.integer :bathrooms
      t.integer :bedrooms
      t.integer :beds
      t.timestamps
    end
    add_index :homes, [
      :lat,
      :long,
      :price,
      :roomtype,
      :beds,
      :bedrooms,
      :bathrooms,
      :start_date,
      :end_date,
    ], name: :homes_index
  end
end
