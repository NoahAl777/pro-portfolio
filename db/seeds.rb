# 10.times do
#   User.create(
#     username: Faker::Internet.username,
#     email: Faker::Internet.email,
#     password: Faker::Internet.password,
#     firstname: Faker::Name.first_name,
#     lastname: Faker::Name.last_name,
#     profession: Faker::Job.title,
#     github: Faker::Internet.url(host: 'github.com')
#     )
# end

25.times do
  Project.create(
    title: Faker::App.unique.name,
    description: Faker::Lorem.paragraph(sentence_count: 2),
    technologies: "#{Faker::ProgrammingLanguage.name}, #{Faker::ProgrammingLanguage.name}, #{Faker::ProgrammingLanguage.name}",
    github: Faker::Internet.url(host: 'github.com'),
    live_link: Faker::Internet.url(host: 'herokuapp.com')
    )
end
