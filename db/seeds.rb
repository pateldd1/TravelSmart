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

User.destroy_all
guest_user = User.create!(username: "Guest", password: "123456")

Home.destroy_all
homes1 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.73574333,
  long: -122.41539901,
  price: 400,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922276/Home1_vghd9e.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes2 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.71802772,
  long: -122.39140357,
  price: 700,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922306/home2_tuefps.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes3 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76353018,
  long: -122.45901883,
  price: 4000,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home3_qr7mr2.jpg",
  beds: 3,
  roomtype: "Entire Home"
)
homes4 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.75599744,
  long: -122.50114132,
  price: 100,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home4_cujdz7.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes5 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.73349389,
  long: -122.43914575,
  price: 2200,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home5_qkngy4.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes6 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.78354137,
  long: -122.42886915,
  price: 2950,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home6_hguah4.jpg",
  beds: 6,
  roomtype: "Entire Home"
)
homes7 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.75289986,
  long: -122.49260179,
  price: 3400,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home7_mn6w3i.png",
  beds: 3,
  roomtype: "Entire Home"
)
homes8 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76405286,
  long: -122.44363511,
  price: 500,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home8_wwo2ui.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes9 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.72695272,
  long: -122.38500051,
  price: 3000,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home9_c3n3vk.jpg",
  beds: 7,
  roomtype: "Entire Home"
)
homes10 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76975707,
  long: -122.40303736,
  price: 1030,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home10_kkwekg.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes11 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.7434939,
  long: -122.42086185,
  price: 450,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home11_lk4781.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes12 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.73543372,
  long: -122.41347352,
  price: 2700,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home12_lx0sqp.jpg",
  beds: 5,
  roomtype: "Entire Home"
)

homes13 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.77018411,
  long: -122.45792444,
  price: 1300,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home13_svivmm.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes14 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76208576,
  long: -122.47174521,
  price: 1500,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home14_xf2eei.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes15 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.71059965,
  long: -122.42874999,
  price: 1650,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home15_zuf141.jpg",
  beds: 8,
  roomtype: "Entire Home"
)
homes16 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.73918482,
  long: -122.4425699,
  price: 1550,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home16_ek4yup.jpg",
  beds: 1,
  roomtype: "Private Room"
)
homes17 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.72212374,
  long: -122.43733212,
  price: 2770,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home17_aux5eh.jpg",
  beds: 5,
  roomtype: "Entire Home"
)
homes18 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.77578668,
  long: -122.45619801,
  price: 3610,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home18_jzz5on.jpg",
  beds: 10,
  roomtype: "Entire Home"
)
homes19 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.78642475,
  long: -122.41360693,
  price: 2900,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home19_yzejmm.jpg",
  beds: 15,
  roomtype: "Entire Home"
)
homes20 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.78198248,
  long: -122.45854506,
  price: 150,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home20_lbfnzc.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes21 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.70587994,
  long: -122.42015515,
  price: 350,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home21_tn3vho.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes22 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.7185728,
  long: -122.39613813,
  price: 200,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home22_z8qjeu.jpg",
  beds: 2,
  roomtype: "Shared Room"
)
homes23 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.77938135,
  long: -122.45478873,
  price: 100,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home23_dmzp84.jpg",
  beds: 2,
  roomtype: "Shared Room"
)
homes24 = Home.create!(
  title: "What a great Place",
  description: "Great House",
  lat: 37.76673272,
  long: -122.42492374,
  price: 150,
  host_id: guest_user.id,
  address: "best lane in the world",
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home24_mdim32.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
# d
