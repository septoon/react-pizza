const catalogList = [
  {
    'title': 'Пицца с тунцом',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/punez.png',
    'prices': [ '400', '700', '900', ],
    'composition': 'тунец, сыр пармезан, соус, оливки, помидоры',
    'isChange': false, 
    'id': 0
  },
  {
    'title': 'Пицца "Маргарита"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/margarita.png',
    'prices': [ '340', '420', '560', ],
    'composition': 'сыр, соус, помидор, зелень',
    'isChange': false, 
    'id': 1
  },
  {
    'title': 'Пицца Вегетарианская',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/vegani.png',
    'prices': [ '340', '480', '690', ],
    'composition': 'сыр, соус, помидор, кукуруза, болгарский перец, грибы, брокколи, маслины',
    'isChange': false, 
    'id': 2
  },
  {
    'title': 'Пицца 4 сыра',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/4sira.png',
    'prices': [ '440', '680', '800', ],
    'composition': 'пармезан, моцарелла, гауда, эдам, соус',
    'isChange': false, 
    'id': 3
  },
  {
    'title': 'Пицца "Грибная"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/gribi.png',
    'prices': [ '355', '520', '680', ],
    'composition': 'сыр, соус, помидор, шампиньоны, зелень, болгарский перец',
    'isChange': false, 
    'id': 4
  },
  {
    'title': 'Пицца "Антонио"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/margarita.png',
    'prices': [ '365', '520', '730', ],
    'composition': 'сыр, соус, салями, грибы, болгарский перец, кукуруза, зелень',
    'isChange': false, 
    'id': 5
  },
  {
    'title': 'Пицца Классика',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/vegani.png',
    'prices': [ '380', '510', '650', ],
    'composition': 'сыр, соус, салями, ветчина, грибы, помидор, сыр',
    'isChange': false, 
    'id': 6
  },
  {
    'title': 'Пицца Пикассо',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/picaso.png',
    'prices': [ '360', '520', '665', ],
    'composition': 'сыр, соус, салями, буженина, помидоры, кукуруза',
    'isChange': false, 
    'id': 7
  },
  {
    'title': 'Пицца "Прошуто"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/proshito.png',
    'prices': [ '365', '520', '730', ],
    'composition': 'сыр, соус, помидор, ветчина, грибы',
    'isChange': false, 
    'id': 8
  },
  {
    'title': 'Пицца "Курица с грибами"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/kashagribi.png',
    'prices': [ '380', '580', '700', ],
    'composition': 'сыр, соус, курица, грибы, зелень по желанию',
    'isChange': false, 
    'id': 9
  },
  {
    'title': 'Пицца "Гавайская"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/gavai.png',
    'prices': [ '350', '580', '690', ],
    'composition': 'сыр, соус, курица или ветчина, ананас',
    'isChange': false, 
    'id': 10
  },
  {
    'title': 'Пицца "Морская"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/morskay.png',
    'prices': [ '470', '750', '900', ],
    'composition': 'мидии, осьминоги, креветки, кальмары, сыр, соус, зелень',
    'isChange': false, 
    'id': 11
  },
  {
    'title': 'Пицца "Микс"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/mix.png',
    'prices': [ '490', '680', '900', ],
    'composition': 'сыр, соус, салями, ветчина, буженина, курица, грибы, сладкий перец',
    'isChange': false, 
    'id': 12
  },
  {
    'title': 'Пицца "Салями"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/salami.png',
    'prices': [ '350', '510', '650', ],
    'composition': 'сыр, соус, салями, маслины',
    'isChange': false, 
    'id': 13
  },
  {
    'title': 'Пицца "С сёмгой"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/ssemgoi.png',
    'prices': [ '460', '740', '900', ],
    'composition': 'сыр, соус, оливки, сёмга, креветки',
    'isChange': false, 
    'id': 14
  },
  {
    'title': 'Пицца "Пеперони"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/peperoni.png',
    'prices': [ '340', '490', '650', ],
    'composition': 'сыр, соус, перерони, болгарский перец',
    'isChange': false, 
    'id': 15
  },
  {
    'title': 'Пицца "Vivat"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/vivat.png',
    'prices': [ '440', '620', '800', ],
    'composition': 'сыр, соус, свинина, буженина, пеперони, грибы, зелень',
    'isChange': false, 
    'id': 16
  },
  {
    'title': 'Пицца "Пармезан"',
    'image': 'http://pizza.vivatalushta.ru/images/pizza/parmezan.png',
    'prices': [ '400', '500', '800', ],
    'composition': 'сыр, соус, свинина, помидор',
    'isChange': false, 
    'id': 17
  }
]

export default catalogList
