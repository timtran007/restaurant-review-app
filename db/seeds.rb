# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


homeslice_pizza = Restaurant.create(
    name: "Homeslice Pizza",
    address: "1415 S Congress Ave, Austin, TX 78704",
    image_url: "https://cdn.tasteatlas.com/images/restaurants/51bd5b12d86345e282227b9eceb567bb.jpg",
    cuisine: "Pizza",
    price: 1,

)

franklin_barbecue = Restaruant.create(
    name: "Franklin Barbecue",
    address: "900 E 11th St, Austin, TX 78702",
    image_url: "https://media.bizj.us/view/img/4591511/franklinbarbecue-2*1200xx5760-3246-0-592.jpg",
    cuisine: "BBQ",
    price: 2,
)

odd_duck = Restaruant.create(
    name: "Odd Duck",
    address: "1201 S Lamar Blvd, Austin, TX 78704",
    image_url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Exterior2-f2ef4ee2fd3b310_f2ef4fe1-07ab-ed48-ffa600d50ea7787b.jpg",
    cuisine: "New American",
    price: 3,
)

p_terrys = Restaruant.create(
    name: "P. Terry's",
    address: "4220 W William Cannon Dr, Austin, TX 78749",
    image_url: "https://static.spacecrafted.com/b55ed33c13d643ed93f54b2b9e66400f/i/eb40b65dd18d460d970ac4fb9d2342c9/1/4SoifmQp45JMgBnHp7ed2/15_thumbnail.jpg",
    cuisine: "Burgers",
    price: 1,
)

red_ash = Restaruant.create(
    name: "Red Ash",
    address: "Colorado Tower, 303 Colorado St #200, Austin, TX 78701",
    image_url: "https://www.austinchronicle.com/binary/c068/food_RedAsh1.jpg",
    cuisine: "Italian",
    price: 3,
)

tim = User.create(
    name: "Tim"
    username: "tim"
    image_url: "https://decisivedigitalmarketing.com/wp-content/uploads/bb-plugin/cache/gmail-photo-150x150-circle.jpg"
)

vanessa = User.create(
    name: "Vanessa"
    username: "vanessa"
    image_url: "https://decisivedigitalmarketing.com/wp-content/uploads/bb-plugin/cache/IMG_8514-150x150-circle.jpg"
)