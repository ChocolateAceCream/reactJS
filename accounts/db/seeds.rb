# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times {Record.create title: Faker::Commerce.product_name, date: Faker::Date.between(6.days.ago, Date.today), amount: (Faker::Number.decimal(3,2).to_f-500).round(2)}
