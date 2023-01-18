module.exports = {
  pages: {
    main:{
      link: './main.html',
      title: 'Главная страница'
    },
    about: {
      link: './about.html',
      title: 'О компании',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ]
    },
    support: {
      link: './support.html',
      title: 'Поддержка',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ]
    },
    benefits: {
      link: './benefits.html',
      title: 'Преимущества',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ]
    },
    contacts: {
      link: './contacts.html',
      title: 'Контакты',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ]
    },
    ourProjects: {
      link: './our-projects.html',
      title: 'Наши проекты',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
      ]
    },
    projectStand: {
      link: './project-stand.html',
      title: 'Проект - стандартный',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Наши проекты",
          link: './our-projects.html'
        }
      ]
    },
    projectIconic: {
      link: './project-iconic.html',
      title: 'Проект - знаковый',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Наши проекты",
          link: './our-projects.html'
        }
      ]
    },
    search: {
      link: './search.html',
      title: 'Результаты поиска',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ]
    },
    searchEmpty: {
      link: './search-empty.html',
      title: 'Результаты поиска (не найдено)',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ],
      popularList: [{name:'projects-item'}, {name:'article-item', param: {"sizeMd": true}}, {name:'projects-item'}, {name:'article-item', param: {"sizeMd": true}}, {name:'projects-item'}, {name:'article-item', param: {"sizeMd": true}}]
    },
    catalogCategory: {
      link: './catalog-category.html',
      title: 'Каталог товаров',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ],
      catalogPopular: [{name:'catalog-item'}, {name:'catalog-item', param: {priceFrom: '4 536'}}, {name:'catalog-item'}, {name:'catalog-item'}, {name:'catalog-item'}, {name:'catalog-item'}],
      catalogNews: [{name:'catalog-item'}, {name:'catalog-item'}, {name:'catalog-item'}, {name:'catalog-item'}, {name:'catalog-item'}, {name:'catalog-item'}]
    },
    catalog: {
      link: './catalog.html',
      title: 'Каталог',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Каталог",
          link: "./catalog-category.html"
        }
      ],
    },
    catalog_list: {
      link: './catalog_view-list.html',
      title: 'Каталог (Вид списком)',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Каталог",
          link: "./catalog-category.html"
        }
      ],
    },
    product_card: {
      link: './product-card-fan.html',
      title: 'Вентилятор VKK-100m',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Каталог",
          link: "./catalog-category.html",
        },
        {
          text: "Вентеляторы",
          link: "./main.html",
        },
        {
          text: "Круглые канальные вентиляторы VKK",
          link: "./product-card-fan.html",
        },
      ]
    },
    shopping_cart: {
      link: './shopping-cart.html',
      title: 'Ваша корзина',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Корзина",
          link: "./shopping-cart.html"
        },
      ]
    },
    catalog_table: {
      link: './catalog_view-table.html',
      title: 'Каталог (Вид таблицей)',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Каталог",
          link: "./catalog-category.html"
        }
      ],
    },
    goodsSeries: {
      link: './goods-series.html',
      title: 'Серия товаров',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Каталог товаров",
          link: "./catalog-category.html"
        },
        {
          text: "Вентиляторы",
          link: "./catalog-category.html"
        }
      ],
    },
    blog: {
      link: './blog.html',
      title: 'Блог',
      breadCrumbsList: [
         {
           text: "Главная",
           link: "./main.html"
         },
      ],
      popularList: [{name:'article-item', param: {"sizeMd": true}}, {name:'article-item', param: {"sizeMd": true}}, {name:'article-item', param: {"sizeMd": true}}, {name:'article-item', param: {"sizeMd": true}}, {name:'article-item', param: {"sizeMd": true}}, {name:'article-item', param: {"sizeMd": true}}, {name:'article-item', param: {"sizeMd": true}}]
    },
    blogItemPage: {
      link: './blog-item-page.html',
      title: 'Страница Блога',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Блог",
          link: "./blog.html"
        }
      ]
    },
    pageFavorite: {
      link: './page-favorite.html',
      title: 'Избранное',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ]
    },
    comparison: {
      link: './comparison.html',
      title: 'Сравнение',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Каталог",
          link: "./catalog.html"
        }
      ]
    },
    privacy_policy: {
      link: './privacy_policy.html',
      title: 'Политика конфиденциальности',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        }
      ]
    },
    solutions: {
      link: './solutions.html',
      title: 'Решения',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Решения",
          nolink: true
        }
      ]
    },
    solutions_noresult: {
      link: './solutions-no-results.html',
      title: 'Решения (нет результатов поиска)',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Решения",
          nolink: true
        }
      ]
    },
    solutions_landing: {
      link: './solutions-landing.html',
      title: 'Решения (Лэндинг)',
      breadCrumbsList: []
    },
    job: {
      link: './job.html',
      title: 'Карьера',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Карьера",
          nolink: true
        }
      ]
    },
    job_vacancy: {
      link: './job-vacancy.html',
      title: 'Вакансия',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Карьера",
          link: "./job.html"
        },
        {
          text: "Вакансия",
          nolink: true
        }
      ]
    },
    page_404: {
      link: './page_404.html',
      title: '404 - Страница не найдена',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
      ]
    },
    thanks: {
      link: './thanks.html',
      title: 'Спасибо за заказ',
      breadCrumbsList: [
        {
          text: "Главная",
          link: "./main.html"
        },
        {
          text: "Корзина",
          link: "./shopping-cart.html"
        },
      ]
    }
  }
}
