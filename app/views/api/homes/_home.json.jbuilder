json.extract! home,
  :id,
  :lat,
  :long,
  :price,
  :host,
  :title,
  :description,
  :address,
  :trips,
  :roomtype

  json.image_url asset_path(home.image.url(:small))

  json.space do
    json.bathrooms home.bathrooms
    json.bedrooms home.bedrooms
    json.beds home.beds
  end
