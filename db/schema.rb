# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170723071446) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "homes", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.float    "lat"
    t.float    "long"
    t.integer  "price"
    t.integer  "host_id",            null: false
    t.string   "address"
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "bathrooms"
    t.integer  "bedrooms"
    t.integer  "beds"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["bathrooms"], name: "index_homes_on_bathrooms", using: :btree
    t.index ["bedrooms"], name: "index_homes_on_bedrooms", using: :btree
    t.index ["beds"], name: "index_homes_on_beds", using: :btree
    t.index ["end_date"], name: "index_homes_on_end_date", using: :btree
    t.index ["price"], name: "index_homes_on_price", using: :btree
    t.index ["start_date"], name: "index_homes_on_start_date", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
