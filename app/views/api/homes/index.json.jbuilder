 @homes.each do |home|
  json.set! home.id do
    json.extract! home,
      :id,
      :lat,
      :long,
      :price,
      :title,
      :address,
      :roomtype

      json.space do
        json.beds home.beds
        json.bedrooms home.bedrooms
        json.bathrooms home.bathrooms
      end
      json.image_url asset_path(home.image.url(:small))
  end
end
