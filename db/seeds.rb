# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.new(
  first_name: "Lauren",
  last_name: "Kashan",
  email: "lkashan@gmail.com",
  phone_number: "410-404-9044",
  donation_pledge: "3",
  charity_1: "Trans Women Of Color Collective",
  charity_1_info: "Trans Women of Color Collective (TWOCC) was created to cultivate economic opportunities and affirming spaces for trans people of color and our families, to foster kinship, build community, engage in healing and restorative justice through arts, culture, media, advocacy and activism. Our efforts center those in our community who have not had access to resources, opportunities and sustainable systems of support to live unapologetically in their truths; Trans and gender non-conforming people of color, in particularly Black trans women and femmes, poor, indigenous, disabled, our seniors and youth who are disproportionately impacted by structural and state sanctioned violence that impacts our socio-economic growth and development and is inextricably linked to physical violence and discrimination we face daily.",
  charity_1_link: "https://www.twocc.us"
)
user1.password = "123456"
user1.save

user2 = User.new(
  first_name: "Vinnie",
  last_name: "Varanid",
  email: "MUSTCHOMPYELLOW@gmail.com",
  phone_number: "666-666-6666",
  donation_pledge: "10",
  charity_1: "MAPS: Multidisciplinary Association for Psychadelic Studies",
  charity_1_info: "Founded in 1986, the Multidisciplinary Association for Psychedelic Studies (MAPS) is a 501(c)(3) non-profit research and educational organization that develops medical, legal, and cultural contexts for people to benefit from the careful uses of psychedelics and marijuana.",
  charity_1_link: "https://maps.org/"
)
user2.password = "123456"
user2.save

user3 = User.new(
  first_name: "Justin",
  last_name: "Looper",
  email: "jloops@gmail.com",
  phone_number: "410-867-5309",
  donation_pledge: "4",
  charity_1: "Anti Police Terror Project",
  charity_1_info: "The Anti Police-Terror Project is a Black-led, multi-racial, intergenerational coalition that seeks to build a replicable and sustainable model to eradicate police terror in communities of color. We support families surviving police terror in their fight for justice, documenting police abuses and connecting impacted families and community members with resources, legal referrals, and opportunities for healing.",
  charity_1_link: "https://www.antipoliceterrorproject.org/"
)
user3.password = "123456"
user3.save

user4 = User.new(
  first_name: "Shakira",
  last_name: "Salticidae",
  email: "hipsdontlie@gmail.com",
  phone_number: "123-456-7890",
  donation_pledge: "15",
  charity_1: "A Voice For The Innocent",
  charity_1_info: "A Voice for the Innocent is a non-profit community dedicated to the support of those affected by sexual violence by offering a safe and compassionate space to share stories and seek help.",
  charity_1_link: "https://www.avoicefortheinnocent.org/"
)
user4.password = "123456"
user4.save

acc1 = Accolade.create!(nominator: "Vinnie", body: "Big shoutout to Lauren coming through with the tasty roaches today! I LOVE ROACHES YOU'RE THE BEST!!!", user_id: "1")
acc2 = Accolade.create!(nominator: "Atari", body: "Thanksssss for letting me hang out on your niccccce warm computer sssscreen all day", user_id: "3")
acc3 = Accolade.create!(nominator: "Ack", body: "F R I E N D!!!!!! Always knows where to find the BEST bugs. CA-CAWWWWWW", user_id: "2")
acc4 = Accolade.create!(nominator: "Stycc", body: "So grateful to have someone so similar to me in my life! It's like we're the same person!", user_id: "3")
acc5 = Accolade.create!(nominator: "Justin", body: "SHAKE SHAKE SHAKE SENORA, SHAKE YOUR BODY LINE. Seriously though, best jumper, dancer, and murderer of fruit flies ever", user_id: "4")
