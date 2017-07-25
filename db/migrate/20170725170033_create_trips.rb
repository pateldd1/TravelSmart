class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.integer :visitor_id, null: false
      t.integer :home_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.float :totalcost, null: false
      t.timestamps null: false
    end
    add_index :trips, :visitor_id
    add_index :trips, :home_id
  end
end
