# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with long: lng,
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# def lat
#   (37.773972 * rand(1..1.00042357))
# end
#
# def lng # SF
#   (-122.431297 * rand(1..1.00057267))
# end

Home.destroy_all;
homes1 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.73574333,
  long: -122.41539901,
  price: 400,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "",
  beds: 3
)
homes2 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.71802772,
  long: -122.39140357,
  price: 700,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/home2.png",
  beds: 3
)
homes3 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76353018,
  long: -122.45901883,
  price: 4000,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/home3.png",
  beds: 3
)
homes4 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.75599744,
  long: -122.50114132,
  price: 100,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/home4.png",
  beds: 3
)
homes5 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.73349389,
  long: -122.43914575,
  price: 2200,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home5.png",
  beds: 3
)
homes6 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.78354137,
  long: -122.42886915,
  price: 2950,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home6.png",
  beds: 3
)
homes7 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.75289986,
  long: -122.49260179,
  price: 3400,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home7.png",
  beds: 3
)
homes8 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76405286,
  long: -122.44363511,
  price: 500,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home8.png",
  beds: 3
)
homes9 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.72695272,
  long: -122.38500051,
  price: 3000,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home9.png",
  beds: 3
)
homes10 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76975707,
  long: -122.40303736,
  price: 1030,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home10.png",
  beds: 3
)
homes11 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.7434939,
  long: -122.42086185,
  price: 450,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home11.png",
  beds: 3
)
homes12 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.73543372,
  long: -122.41347352,
  price: 2700,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home12.png",
  beds: 3
)

homes13 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.77018411,
  long: -122.45792444,
  price: 1300,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home13.png",
  beds: 3
)
homes14 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76208576,
  long: -122.47174521,
  price: 1500,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home14.png",
  beds: 3
)
homes15 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.71059965,
  long: -122.42874999,
  price: 1650,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home15.png",
  beds: 3
)
homes16 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.73918482,
  long: -122.4425699,
  price: 1550,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home16.png",
  beds: 3
)
homes17 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.72212374,
  long: -122.43733212,
  price: 2770,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home17.png",
  beds: 3
)
homes18 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.77578668,
  long: -122.45619801,
  price: 3610,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home18.png",
  beds: 3
)
homes19 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.78642475,
  long: -122.41360693,
  price: 2900,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home19.png",
  beds: 3
)
homes20 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.78198248,
  long: -122.45854506,
  price: 150,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home20.png",
  beds: 3
)
homes21 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.70587994,
  long: -122.42015515,
  price: 350,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home21.png",
  beds: 3
)
homes22 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.7185728,
  long: -122.39613813,
  price: 200,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home22.png",
  beds: 3
)
homes23 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.77938135,
  long: -122.45478873,
  price: 100,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home23.png",
  beds: 3
)
homes24 = Home.create(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76673272,
  long: -122.42492374,
  price: 150,
  host_id: 1,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "https://s3-us-west-1.amazonaws.com/travelsmart1/Home+Images/home24.png",
  beds: 3
)

User.destroy_all
guest_user = User.create(username: "Guest", password: "123456")
