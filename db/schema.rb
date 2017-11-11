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

ActiveRecord::Schema.define(version: 20170728211547) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "homes", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.string   "roomtype"
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
    t.index ["lat", "long", "price", "roomtype", "beds", "bedrooms", "bathrooms", "start_date", "end_date"], name: "homes_index", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "home_id",    null: false
    t.integer  "rating",     null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["home_id"], name: "index_reviews_on_home_id", using: :btree
  end

  create_table "trips", force: :cascade do |t|
    t.integer  "visitor_id", null: false
    t.integer  "home_id",    null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.float    "totalcost",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["visitor_id"], name: "index_trips_on_visitor_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.string   "image_url"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
