const catalogList = [
  {
    title: 'Пицца с тунцом',
    image: 'http://pizza.vivatalushta.ru/images/pizza/punez.png',
    price: {
      small: '400',
      middle: '700',
      large: '900'
    },
    composition: 'тунец, сыр пармезан, соус, оливки, помидоры',
    isChange: false
  },
  {
    title: 'Пицца "Маргарита"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/margarita.png',
    price: {
      small: '340',
      middle: '420',
      large: '560'
    },
    composition: 'сыр, соус, помидор, зелень',
    isChange: false
  },
  {
    title: 'Пицца Вегетарианская',
    image: 'http://pizza.vivatalushta.ru/images/pizza/vegani.png',
    price: {
      small: '340',
      middle: '480',
      large: '690'
    },
    composition: 'сыр, соус, помидор, кукуруза, болгарский перец, грибы, брокколи, маслины',
    isChange: false
  },
  {
    title: 'Пицца 4 сыра',
    image: 'http://pizza.vivatalushta.ru/images/pizza/4sira.png',
    price: {
      small: '440',
      middle: '680',
      large: '800'
    },
    composition: 'пармезан, моцарелла, гауда, эдам, соус',
    isChange: false
  },
  {
    title: 'Пицца "Грибная"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/gribi.png',
    price: {
      small: '355',
      middle: '520',
      large: '680'
    },
    composition: 'сыр, соус, помидор, шампиньоны, зелень, болгарский перец',
    isChange: false
  },
  {
    title: 'Пицца "Антонио"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/margarita.png',
    price: {
      
      small: '365',
      middle: '520',
      large: '730'
    },
    composition: 'сыр, соус, салями, грибы, болгарский перец, кукуруза, зелень',
    isChange: false
  },
  {
    title: 'Пицца Классика',
    image: 'http://pizza.vivatalushta.ru/images/pizza/vegani.png',
    price: {
      small: '380',
      middle: '510',
      large: '650'
    },
    composition: 'сыр, соус, салями, ветчина, грибы, помидор, сыр',
    isChange: false
  },
  {
    title: 'Пицца Пикассо',
    image: 'http://pizza.vivatalushta.ru/images/pizza/picaso.png',
    price: {
      small: '360',
      middle: '520',
      large: '665'
    },
    composition: 'сыр, соус, салями, буженина, помидоры, кукуруза',
    isChange: false
  },
  {
    title: 'Пицца "Прошуто"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/proshito.png',
    price: {
      small: '365',
      middle: '520',
      large: '730'
    },
    composition: 'сыр, соус, помидор, ветчина, грибы',
    isChange: false
  },
  {
    title: 'Пицца "Курица с грибами"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/kashagribi.png',
    price: {
      small: '380',
      middle: '580',
      large: '700'
    },
    composition: 'сыр, соус, курица, грибы, зелень по желанию',
    isChange: false
  },
  {
    title: 'Пицца "Гавайская"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/gavai.png',
    price: {
      
      small: '350',
      middle: '580',
      large: '690'
    },
    composition: 'сыр, соус, курица или ветчина, ананас',
    isChange: false
  },
  {
    title: 'Пицца "Морская"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/morskay.png',
    price: {
      small: '470',
      middle: '750',
      large: '900'
    },
    composition: 'мидии, осьминоги, креветки, кальмары, сыр, соус, зелень',
    isChange: false
  },
  {
    title: 'Пицца "Микс"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/mix.png',
    price: {
      small: '490',
      middle: '680',
      large: '900'
    },
    composition: 'сыр, соус, салями, ветчина, буженина, курица, грибы, сладкий перец',
    isChange: false
  },
  {
    title: 'Пицца "Салями"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/salami.png',
    price: {
      small: '350',
      middle: '510',
      large: '650'
    },
    composition: 'сыр, соус, салями, маслины',
    isChange: false
  },
  {
    title: 'Пицца "С сёмгой"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/ssemgoi.png',
    price: {
      
      small: '460',
      middle: '740',
      large: '900'
    },
    composition: 'сыр, соус, оливки, сёмга, креветки',
    isChange: false
  },
  {
    title: 'Пицца "Пеперони"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/peperoni.png',
    price: {
      small: '340',
      middle: '490',
      large: '650'
    },
    composition: 'сыр, соус, перерони, болгарский перец',
    isChange: false
  },
  {
    title: 'Пицца "Vivat"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/vivat.png',
    price: {
      small: '440',
      middle: '620',
      large: '800'
    },
    composition: 'сыр, соус, свинина, буженина, пеперони, грибы, зелень',
    isChange: false
  },
  {
    title: 'Пицца "Пармезан"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/parmezan.png',
    price: {
      small: '400',
      middle: '500',
      large: '800'
    },
    composition: 'сыр, соус, свинина, помидор',
    isChange: false
  }
]

export default catalogList
