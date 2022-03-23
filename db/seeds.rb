10.times do
  User.create(
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    profession: Faker::Job.title,
    github: Faker::Internet.url(host: 'github.com')
    )
end
