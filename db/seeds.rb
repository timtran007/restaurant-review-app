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

franklin_barbecue = Restaurant.create(
    name: "Franklin Barbecue",
    address: "900 E 11th St, Austin, TX 78702",
    image_url: "https://media.bizj.us/view/img/4591511/franklinbarbecue-2*1200xx5760-3246-0-592.jpg",
    cuisine: "BBQ",
    price: 2,
)

odd_duck = Restaurant.create(
    name: "Odd Duck",
    address: "1201 S Lamar Blvd, Austin, TX 78704",
    image_url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Exterior2-f2ef4ee2fd3b310_f2ef4fe1-07ab-ed48-ffa600d50ea7787b.jpg",
    cuisine: "New American",
    price: 3,
)

p_terrys = Restaurant.create(
    name: "P. Terry's",
    address: "4220 W William Cannon Dr, Austin, TX 78749",
    image_url: "https://static.spacecrafted.com/b55ed33c13d643ed93f54b2b9e66400f/i/eb40b65dd18d460d970ac4fb9d2342c9/1/4SoifmQp45JMgBnHp7ed2/15_thumbnail.jpg",
    cuisine: "Burgers",
    price: 1,
)

red_ash = Restaurant.create(
    name: "Red Ash",
    address: "Colorado Tower, 303 Colorado St #200, Austin, TX 78701",
    image_url: "https://www.austinchronicle.com/binary/c068/food_RedAsh1.jpg",
    cuisine: "Italian",
    price: 3,
)

tim = User.create(
    name: "Tim",
    user_name: "tim",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-U03UFUJS7UH-bd877fb5ef68-512",
    password_digest: "adfadfkadf",
)

vanessa = User.create(
    name: "Vanessa",
    user_name: "vanessa",
    image_url: "https://decisivedigitalmarketing.com/wp-content/uploads/bb-plugin/cache/IMG_8514-150x150-circle.jpg",
    password_digest: "adfadfkadf"
)

homeslice_pizza.reviews.create(
    headline: "Pizza is Good",
    rating: 5,
    comment: "Amazing customer service and very family friendly place where they give your kid a doughball to play with! Pizza is good!",
    user_id: vanessa.id
)

franklin_barbecue.reviews.create(
    headline: "My husband likes it",
    rating: 4,
    comment: "Not sure if the long wait was worth it with a kid, but they enjoyed the food",
    user_id: vanessa.id
)

odd_duck.reviews.create(
    headline: "Yummy food",
    rating: 5,
    comment: "I normally don't like to try new foods, but it was great!",
    user_id: vanessa.id
)

p_terrys.reviews.create(
    headline: "Simple and Delicious",
    rating: 5,
    comment: "Good fast food burger that is pretty cheap and tasty!",
    user_id: vanessa.id
)

red_ash.reviews.create(
    headline: "I Don't Know Why It's Booked",
    rating: 4,
    comment: "The dessert was amazing, but I didn't enjoy my pasta dish that much. The atmosphere is great though",
    user_id: vanessa.id
)

homeslice_pizza.reviews.create(
    headline: "Best Pizza in ATX",
    rating: 5,
    comment: "Simply the best pizza in Austin, especially if you love New York Style pizza, it's the closest thing to it!",
    user_id: tim.id
)

franklin_barbecue.reviews.create(
    headline: "Best Barbecue in the World",
    rating: 5,
    comment: "This place put the ordinary brisket on the map! It was an inspiration for me to get an offset smoker and started making my own briskets. The line is long, so get there early!!",
    user_id: tim.id
)

odd_duck.reviews.create(
    headline: "If You're Into Different Foods",
    rating: 5,
    comment: "Great place to go with a beautiful location and the food is locally sourced!",
    user_id: tim.id
)

p_terrys.reviews.create(
    headline: "Okay Burger",
    rating: 3,
    comment: "Hit or a miss sometimes with seasoning, but they do use 100% angus beef",
    user_id: tim.id
)

red_ash.reviews.create(
    headline: "Reservations Booked Months in Advance",
    rating: 4,
    comment: "Pretty good Italian restaurant that serves wood-fire dishes.",
    user_id: tim.id
)

