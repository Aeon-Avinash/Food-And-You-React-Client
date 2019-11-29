// const _this = this;
const moment = require("moment");
const resourceTitleAccessor = "resourceTitle";
const resourceIdAccessor = "resourceId";
const resourceTypes = {
  mealPlan: "mealPlan",
  dietEntry: "dietEntry"
};
const resourceMap = [
  {
    [resourceIdAccessor]: resourceTypes.mealPlan,
    [resourceTitleAccessor]: "Meal Plans"
  },
  {
    [resourceIdAccessor]: resourceTypes.dietEntry,
    [resourceTitleAccessor]: "Diet Entries"
  }
];

const resData_02 = [
  {
    id: 14209,
    original: "coffee",
    originalName: "coffee",
    name: "coffee",
    amount: 1.0,
    unit: "serving",
    unitShort: "serving",
    unitLong: "serving",
    estimatedCost: {
      value: 12.05,
      unit: "US Cents"
    },
    consistency: "solid",
    aisle: "Tea and Coffee",
    image: "brewed-coffee.jpg",
    meta: [],
    nutrition: {
      nutrients: [
        {
          title: "Calories",
          amount: 2.37,
          unit: "cal",
          percentOfDailyNeeds: 0.12
        },
        {
          title: "Fat",
          amount: 0.05,
          unit: "g",
          percentOfDailyNeeds: 0.07
        },
        {
          title: "Saturated Fat",
          amount: 0.0,
          unit: "g",
          percentOfDailyNeeds: 0.03
        },
        {
          title: "Carbohydrates",
          amount: 0.0,
          unit: "g",
          percentOfDailyNeeds: 0.0
        },
        {
          title: "Sugar",
          amount: 0.0,
          unit: "g",
          percentOfDailyNeeds: 0.0
        },
        {
          title: "Cholesterol",
          amount: 0.0,
          unit: "mg",
          percentOfDailyNeeds: 0.0
        },
        {
          title: "Sodium",
          amount: 4.74,
          unit: "mg",
          percentOfDailyNeeds: 0.21
        },
        {
          title: "Caffeine",
          amount: 94.8,
          unit: "mg",
          percentOfDailyNeeds: 31.6
        },
        {
          title: "Protein",
          amount: 0.28,
          unit: "g",
          percentOfDailyNeeds: 0.57
        },
        {
          title: "Vitamin B2",
          amount: 0.18,
          unit: "mg",
          percentOfDailyNeeds: 10.6
        },
        {
          title: "Vitamin B5",
          amount: 0.6,
          unit: "mg",
          percentOfDailyNeeds: 6.02
        },
        {
          title: "Potassium",
          amount: 116.13,
          unit: "mg",
          percentOfDailyNeeds: 3.32
        },
        {
          title: "Manganese",
          amount: 0.05,
          unit: "mg",
          percentOfDailyNeeds: 2.73
        },
        {
          title: "Vitamin B3",
          amount: 0.45,
          unit: "mg",
          percentOfDailyNeeds: 2.26
        },
        {
          title: "Vitamin B1",
          amount: 0.03,
          unit: "mg",
          percentOfDailyNeeds: 2.21
        },
        {
          title: "Magnesium",
          amount: 7.11,
          unit: "mg",
          percentOfDailyNeeds: 1.78
        },
        {
          title: "Folate",
          amount: 4.74,
          unit: "µg",
          percentOfDailyNeeds: 1.19
        }
      ],
      caloricBreakdown: {
        percentProtein: 72.73,
        percentFat: 27.27,
        percentCarbs: 0.0
      },
      weightPerServing: {
        amount: 237,
        unit: "g"
      }
    }
  },
  {
    id: 18239,
    original: "croissant",
    originalName: "croissant",
    name: "croissant",
    amount: 1.0,
    unit: "serving",
    unitShort: "serving",
    unitLong: "serving",
    estimatedCost: {
      value: 86.26,
      unit: "US Cents"
    },
    consistency: "solid",
    aisle: "Bakery/Bread",
    image: "croissants.jpg",
    meta: [],
    nutrition: {
      nutrients: [
        {
          title: "Calories",
          amount: 231.42,
          unit: "cal",
          percentOfDailyNeeds: 11.57
        },
        {
          title: "Fat",
          amount: 11.97,
          unit: "g",
          percentOfDailyNeeds: 18.42
        },
        {
          title: "Saturated Fat",
          amount: 6.65,
          unit: "g",
          percentOfDailyNeeds: 41.54
        },
        {
          title: "Carbohydrates",
          amount: 26.11,
          unit: "g",
          percentOfDailyNeeds: 8.7
        },
        {
          title: "Sugar",
          amount: 6.42,
          unit: "g",
          percentOfDailyNeeds: 7.13
        },
        {
          title: "Cholesterol",
          amount: 38.19,
          unit: "mg",
          percentOfDailyNeeds: 12.73
        },
        {
          title: "Sodium",
          amount: 266.19,
          unit: "mg",
          percentOfDailyNeeds: 11.57
        },
        {
          title: "Protein",
          amount: 4.67,
          unit: "g",
          percentOfDailyNeeds: 9.35
        },
        {
          title: "Selenium",
          amount: 12.94,
          unit: "µg",
          percentOfDailyNeeds: 18.48
        },
        {
          title: "Vitamin B1",
          amount: 0.22,
          unit: "mg",
          percentOfDailyNeeds: 14.74
        },
        {
          title: "Folate",
          amount: 50.16,
          unit: "µg",
          percentOfDailyNeeds: 12.54
        },
        {
          title: "Manganese",
          amount: 0.19,
          unit: "mg",
          percentOfDailyNeeds: 9.41
        },
        {
          title: "Vitamin A",
          amount: 424.08,
          unit: "IU",
          percentOfDailyNeeds: 8.48
        },
        {
          title: "Vitamin B2",
          amount: 0.14,
          unit: "mg",
          percentOfDailyNeeds: 8.08
        },
        {
          title: "Iron",
          amount: 1.16,
          unit: "mg",
          percentOfDailyNeeds: 6.43
        },
        {
          title: "Vitamin B3",
          amount: 1.25,
          unit: "mg",
          percentOfDailyNeeds: 6.24
        },
        {
          title: "Phosphorus",
          amount: 59.85,
          unit: "mg",
          percentOfDailyNeeds: 5.99
        },
        {
          title: "Fiber",
          amount: 1.48,
          unit: "g",
          percentOfDailyNeeds: 5.93
        },
        {
          title: "Vitamin B5",
          amount: 0.49,
          unit: "mg",
          percentOfDailyNeeds: 4.91
        },
        {
          title: "Vitamin E",
          amount: 0.48,
          unit: "mg",
          percentOfDailyNeeds: 3.19
        },
        {
          title: "Zinc",
          amount: 0.43,
          unit: "mg",
          percentOfDailyNeeds: 2.85
        },
        {
          title: "Copper",
          amount: 0.05,
          unit: "mg",
          percentOfDailyNeeds: 2.28
        },
        {
          title: "Magnesium",
          amount: 9.12,
          unit: "mg",
          percentOfDailyNeeds: 2.28
        },
        {
          title: "Calcium",
          amount: 21.09,
          unit: "mg",
          percentOfDailyNeeds: 2.11
        },
        {
          title: "Potassium",
          amount: 67.26,
          unit: "mg",
          percentOfDailyNeeds: 1.92
        },
        {
          title: "Vitamin B6",
          amount: 0.03,
          unit: "mg",
          percentOfDailyNeeds: 1.65
        },
        {
          title: "Vitamin B12",
          amount: 0.09,
          unit: "µg",
          percentOfDailyNeeds: 1.52
        }
      ],
      caloricBreakdown: {
        percentProtein: 8.1,
        percentFat: 46.67,
        percentCarbs: 45.23
      },
      weightPerServing: {
        amount: 57,
        unit: "g"
      }
    }
  }
];

const resData_03 = [
  {
    id: 16158,
    original: "2 servings of hummus",
    originalName: "hummus",
    name: "hummus",
    amount: 2.0,
    unit: "servings",
    unitShort: "servings",
    unitLong: "servings",
    estimatedCost: {
      value: 66.0,
      unit: "US Cents"
    },
    consistency: "solid",
    aisle: "Refrigerated",
    image: "hummus.jpg",
    meta: [],
    nutrition: {
      nutrients: [
        {
          title: "Calories",
          amount: 92.96,
          unit: "cal",
          percentOfDailyNeeds: 4.65
        },
        {
          title: "Fat",
          amount: 5.38,
          unit: "g",
          percentOfDailyNeeds: 8.27
        },
        {
          title: "Saturated Fat",
          amount: 0.8,
          unit: "g",
          percentOfDailyNeeds: 5.03
        },
        {
          title: "Carbohydrates",
          amount: 8.0,
          unit: "g",
          percentOfDailyNeeds: 2.67
        },
        {
          title: "Sugar",
          amount: 0.0,
          unit: "",
          percentOfDailyNeeds: 0.0
        },
        {
          title: "Cholesterol",
          amount: 0.0,
          unit: "mg",
          percentOfDailyNeeds: 0.0
        },
        {
          title: "Sodium",
          amount: 212.24,
          unit: "mg",
          percentOfDailyNeeds: 9.23
        },
        {
          title: "Protein",
          amount: 4.42,
          unit: "g",
          percentOfDailyNeeds: 8.85
        },
        {
          title: "Manganese",
          amount: 0.43,
          unit: "mg",
          percentOfDailyNeeds: 21.64
        },
        {
          title: "Copper",
          amount: 0.3,
          unit: "mg",
          percentOfDailyNeeds: 14.76
        },
        {
          title: "Fiber",
          amount: 3.36,
          unit: "g",
          percentOfDailyNeeds: 13.44
        },
        {
          title: "Folate",
          amount: 46.48,
          unit: "µg",
          percentOfDailyNeeds: 11.62
        },
        {
          title: "Magnesium",
          amount: 39.76,
          unit: "mg",
          percentOfDailyNeeds: 9.94
        },
        {
          title: "Phosphorus",
          amount: 98.56,
          unit: "mg",
          percentOfDailyNeeds: 9.86
        },
        {
          title: "Iron",
          amount: 1.37,
          unit: "mg",
          percentOfDailyNeeds: 7.59
        },
        {
          title: "Zinc",
          amount: 1.02,
          unit: "mg",
          percentOfDailyNeeds: 6.83
        },
        {
          title: "Vitamin B1",
          amount: 0.1,
          unit: "mg",
          percentOfDailyNeeds: 6.72
        },
        {
          title: "Vitamin B6",
          amount: 0.11,
          unit: "mg",
          percentOfDailyNeeds: 5.6
        },
        {
          title: "Potassium",
          amount: 127.68,
          unit: "mg",
          percentOfDailyNeeds: 3.65
        },
        {
          title: "Calcium",
          amount: 21.28,
          unit: "mg",
          percentOfDailyNeeds: 2.13
        },
        {
          title: "Vitamin B2",
          amount: 0.04,
          unit: "mg",
          percentOfDailyNeeds: 2.11
        },
        {
          title: "Selenium",
          amount: 1.46,
          unit: "µg",
          percentOfDailyNeeds: 2.08
        },
        {
          title: "Vitamin B3",
          amount: 0.33,
          unit: "mg",
          percentOfDailyNeeds: 1.63
        }
      ],
      caloricBreakdown: {
        percentProtein: 18.04,
        percentFat: 49.33,
        percentCarbs: 32.63
      },
      weightPerServing: {
        amount: 56,
        unit: "g"
      }
    }
  },
  {
    id: 18413,
    original: "2 servings of pita",
    originalName: "pita",
    name: "pita",
    amount: 2.0,
    unit: "servings",
    unitShort: "servings",
    unitLong: "servings",
    estimatedCost: {
      value: 100.0,
      unit: "US Cents"
    },
    consistency: "solid",
    shoppingListUnits: ["ounces", "pounds"],
    aisle: "Bakery/Bread",
    image: "pita-bread.jpg",
    meta: [],
    nutrition: {
      nutrients: [
        {
          title: "Calories",
          amount: 308.0,
          unit: "cal",
          percentOfDailyNeeds: 15.4
        },
        {
          title: "Fat",
          amount: 1.34,
          unit: "g",
          percentOfDailyNeeds: 2.07
        },
        {
          title: "Saturated Fat",
          amount: 0.19,
          unit: "g",
          percentOfDailyNeeds: 1.16
        },
        {
          title: "Carbohydrates",
          amount: 62.38,
          unit: "g",
          percentOfDailyNeeds: 20.79
        },
        {
          title: "Sugar",
          amount: 0.0,
          unit: "",
          percentOfDailyNeeds: 0.0
        },
        {
          title: "Cholesterol",
          amount: 0.0,
          unit: "mg",
          percentOfDailyNeeds: 0.0
        },
        {
          title: "Sodium",
          amount: 600.32,
          unit: "mg",
          percentOfDailyNeeds: 26.1
        },
        {
          title: "Protein",
          amount: 10.19,
          unit: "g",
          percentOfDailyNeeds: 20.38
        },
        {
          title: "Manganese",
          amount: 0.54,
          unit: "mg",
          percentOfDailyNeeds: 26.94
        },
        {
          title: "Vitamin B1",
          amount: 0.3,
          unit: "mg",
          percentOfDailyNeeds: 19.94
        },
        {
          title: "Vitamin B3",
          amount: 2.4,
          unit: "mg",
          percentOfDailyNeeds: 12.0
        },
        {
          title: "Phosphorus",
          amount: 108.64,
          unit: "mg",
          percentOfDailyNeeds: 10.86
        },
        {
          title: "Fiber",
          amount: 2.46,
          unit: "g",
          percentOfDailyNeeds: 9.86
        },
        {
          title: "Calcium",
          amount: 96.32,
          unit: "mg",
          percentOfDailyNeeds: 9.63
        },
        {
          title: "Copper",
          amount: 0.19,
          unit: "mg",
          percentOfDailyNeeds: 9.41
        },
        {
          title: "Iron",
          amount: 1.57,
          unit: "mg",
          percentOfDailyNeeds: 8.71
        },
        {
          title: "Magnesium",
          amount: 29.12,
          unit: "mg",
          percentOfDailyNeeds: 7.28
        },
        {
          title: "Folate",
          amount: 26.88,
          unit: "µg",
          percentOfDailyNeeds: 6.72
        },
        {
          title: "Vitamin B2",
          amount: 0.11,
          unit: "mg",
          percentOfDailyNeeds: 6.39
        },
        {
          title: "Zinc",
          amount: 0.94,
          unit: "mg",
          percentOfDailyNeeds: 6.27
        },
        {
          title: "Vitamin B5",
          amount: 0.44,
          unit: "mg",
          percentOfDailyNeeds: 4.45
        },
        {
          title: "Potassium",
          amount: 134.4,
          unit: "mg",
          percentOfDailyNeeds: 3.84
        },
        {
          title: "Vitamin B6",
          amount: 0.04,
          unit: "mg",
          percentOfDailyNeeds: 1.9
        }
      ],
      caloricBreakdown: {
        percentProtein: 13.48,
        percentFat: 4.0,
        percentCarbs: 82.52
      },
      weightPerServing: {
        amount: 112,
        unit: "g"
      }
    }
  }
];

const recipeData_01 = {
  vegetarian: true,
  vegan: true,
  glutenFree: true,
  dairyFree: true,
  veryHealthy: true,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  weightWatcherSmartPoints: 12,
  gaps: "no",
  lowFodmap: false,
  ketogenic: false,
  whole30: false,
  preparationMinutes: 10,
  cookingMinutes: 10,
  sourceUrl:
    "http://www.simplyquinoa.com/pesto-quinoa-salad-bowls-grilled-tofu/",
  spoonacularSourceUrl:
    "https://spoonacular.com/pesto-quinoa-salad-bowls-with-grilled-tofu-791877",
  aggregateLikes: 69,
  spoonacularScore: 99.0,
  healthScore: 100.0,
  creditsText: "Simply Quinoa",
  sourceName: "Simply Quinoa",
  pricePerServing: 352.9,
  extendedIngredients: [
    {
      id: 10311529,
      aisle: "Produce",
      image: "cherry-tomatoes.png",
      consitency: "solid",
      name: "cherry tomatoes",
      original: "1 pint cherry tomatoes, halved",
      originalString: "1 pint cherry tomatoes, halved",
      originalName: "cherry tomatoes, halved",
      amount: 1.0,
      unit: "pint",
      meta: ["halved"],
      metaInformation: ["halved"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "pts",
          unitLong: "pint"
        },
        metric: {
          amount: 1.0,
          unitShort: "pts",
          unitLong: "pint"
        }
      }
    },
    {
      id: 20137,
      aisle: "Pasta and Rice;Health Foods",
      image: "cooked-quinoa.png",
      consitency: "solid",
      name: "cooked quinoa",
      original: "2 cups cooked quinoa",
      originalString: "2 cups cooked quinoa",
      originalName: "cooked quinoa",
      amount: 2.0,
      unit: "cups",
      meta: ["cooked"],
      metaInformation: ["cooked"],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "cups",
          unitLong: "cups"
        },
        metric: {
          amount: 473.176,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 16163,
      aisle: "Refrigerated;Produce;Ethnic Foods",
      image: "tofu.png",
      consitency: "solid",
      name: "extra firm tofu",
      original: "1 block extra firm tofu",
      originalString: "1 block extra firm tofu",
      originalName: "block extra firm tofu",
      amount: 1.0,
      unit: "",
      meta: ["firm"],
      metaInformation: ["firm"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "",
          unitLong: ""
        },
        metric: {
          amount: 1.0,
          unitShort: "",
          unitLong: ""
        }
      }
    },
    {
      id: 1022020,
      aisle: "Spices and Seasonings",
      image: "garlic-powder.png",
      consitency: "solid",
      name: "garlic powder",
      original: "1 teaspoon garlic powder",
      originalString: "1 teaspoon garlic powder",
      originalName: "garlic powder",
      amount: 1.0,
      unit: "teaspoon",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "tsp",
          unitLong: "teaspoon"
        },
        metric: {
          amount: 1.0,
          unitShort: "tsp",
          unitLong: "teaspoon"
        }
      }
    },
    {
      id: 10011233,
      aisle: "Produce",
      image: "lacinato-kale.jpg",
      consitency: "solid",
      name: "lacinato kale",
      original: "1 large bunch lacinato kale",
      originalString: "1 large bunch lacinato kale",
      originalName: "lacinato kale",
      amount: 1.0,
      unit: "large bunch",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "large bunch",
          unitLong: "large bunch"
        },
        metric: {
          amount: 1.0,
          unitShort: "large bunch",
          unitLong: "large bunch"
        }
      }
    },
    {
      id: 4053,
      aisle: "Oil, Vinegar, Salad Dressing",
      image: "olive-oil.jpg",
      consitency: "liquid",
      name: "olive oil",
      original: "¼ cup olive oil, divided",
      originalString: "¼ cup olive oil, divided",
      originalName: "olive oil, divided",
      amount: 0.25,
      unit: "cup",
      meta: ["divided"],
      metaInformation: ["divided"],
      measures: {
        us: {
          amount: 0.25,
          unitShort: "cups",
          unitLong: "cups"
        },
        metric: {
          amount: 59.147,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 93698,
      aisle: "Pasta and Rice",
      image: "basil-pesto.png",
      consitency: "solid",
      name: "pesto",
      original: "½ cup pesto (homemade or store bought)",
      originalString: "½ cup pesto (homemade or store bought)",
      originalName: "pesto (homemade or store bought)",
      amount: 0.5,
      unit: "cup",
      meta: ["homemade", "store bought", "( or )"],
      metaInformation: ["homemade", "store bought", "( or )"],
      measures: {
        us: {
          amount: 0.5,
          unitShort: "cups",
          unitLong: "cups"
        },
        metric: {
          amount: 118.294,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 2047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consitency: "solid",
      name: "salt",
      original: "Salt + pepper to taste",
      originalString: "Salt + pepper to taste",
      originalName: "Salt + pepper to taste",
      amount: 4.0,
      unit: "servings",
      meta: ["to taste"],
      metaInformation: ["to taste"],
      measures: {
        us: {
          amount: 4.0,
          unitShort: "servings",
          unitLong: "servings"
        },
        metric: {
          amount: 4.0,
          unitShort: "servings",
          unitLong: "servings"
        }
      }
    },
    {
      id: 1012028,
      aisle: "Spices and Seasonings",
      image: "paprika.jpg",
      consitency: "solid",
      name: "smoked paprika",
      original: "1 teaspoon smoked paprika",
      originalString: "1 teaspoon smoked paprika",
      originalName: "smoked paprika",
      amount: 1.0,
      unit: "teaspoon",
      meta: ["smoked"],
      metaInformation: ["smoked"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "tsp",
          unitLong: "teaspoon"
        },
        metric: {
          amount: 1.0,
          unitShort: "tsp",
          unitLong: "teaspoon"
        }
      }
    },
    {
      id: 11477,
      aisle: "Produce",
      image: "zucchini.jpg",
      consitency: "solid",
      name: "zucchini",
      original: '2 medium zucchini, cut into ½" rounds',
      originalString: '2 medium zucchini, cut into ½" rounds',
      originalName: 'zucchini, cut into ½" rounds',
      amount: 2.0,
      unit: "medium",
      meta: ['cut into ½" rounds'],
      metaInformation: ['cut into ½" rounds'],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "medium",
          unitLong: "mediums"
        },
        metric: {
          amount: 2.0,
          unitShort: "medium",
          unitLong: "mediums"
        }
      }
    }
  ],
  id: 791877,
  title: "Pesto Quinoa Salad Bowls with Grilled Tofu",
  readyInMinutes: 20,
  servings: 4,
  image: "https://spoonacular.com/recipeImages/791877-556x370.jpg",
  imageType: "jpg",
  nutrition: {
    nutrients: [
      {
        title: "Calories",
        amount: 479.68,
        unit: "cal",
        percentOfDailyNeeds: 23.98
      },
      {
        title: "Fat",
        amount: 29.77,
        unit: "g",
        percentOfDailyNeeds: 45.8
      },
      {
        title: "Saturated Fat",
        amount: 4.53,
        unit: "g",
        percentOfDailyNeeds: 28.33
      },
      {
        title: "Carbohydrates",
        amount: 38.68,
        unit: "g",
        percentOfDailyNeeds: 12.89
      },
      {
        title: "Sugar",
        amount: 8.24,
        unit: "g",
        percentOfDailyNeeds: 9.16
      },
      {
        title: "Cholesterol",
        amount: 2.48,
        unit: "mg",
        percentOfDailyNeeds: 0.83
      },
      {
        title: "Sodium",
        amount: 600.05,
        unit: "mg",
        percentOfDailyNeeds: 26.09
      },
      {
        title: "Protein",
        amount: 18.28,
        unit: "g",
        percentOfDailyNeeds: 36.55
      },
      {
        title: "Vitamin K",
        amount: 491.8,
        unit: "µg",
        percentOfDailyNeeds: 468.38
      },
      {
        title: "Vitamin A",
        amount: 8393.56,
        unit: "IU",
        percentOfDailyNeeds: 167.87
      },
      {
        title: "Vitamin C",
        amount: 125.53,
        unit: "mg",
        percentOfDailyNeeds: 152.15
      },
      {
        title: "Copper",
        amount: 1.54,
        unit: "mg",
        percentOfDailyNeeds: 76.79
      },
      {
        title: "Manganese",
        amount: 1.34,
        unit: "mg",
        percentOfDailyNeeds: 67.1
      },
      {
        title: "Phosphorus",
        amount: 376.74,
        unit: "mg",
        percentOfDailyNeeds: 37.67
      },
      {
        title: "Magnesium",
        amount: 147.41,
        unit: "mg",
        percentOfDailyNeeds: 36.85
      },
      {
        title: "Potassium",
        amount: 1177.17,
        unit: "mg",
        percentOfDailyNeeds: 33.63
      },
      {
        title: "Vitamin B6",
        amount: 0.58,
        unit: "mg",
        percentOfDailyNeeds: 29.19
      },
      {
        title: "Iron",
        amount: 5.12,
        unit: "mg",
        percentOfDailyNeeds: 28.45
      },
      {
        title: "Folate",
        amount: 99.27,
        unit: "µg",
        percentOfDailyNeeds: 24.82
      },
      {
        title: "Vitamin E",
        amount: 3.45,
        unit: "mg",
        percentOfDailyNeeds: 23.0
      },
      {
        title: "Vitamin B1",
        amount: 0.34,
        unit: "mg",
        percentOfDailyNeeds: 22.87
      },
      {
        title: "Calcium",
        amount: 228.26,
        unit: "mg",
        percentOfDailyNeeds: 22.83
      },
      {
        title: "Fiber",
        amount: 5.24,
        unit: "g",
        percentOfDailyNeeds: 20.94
      },
      {
        title: "Vitamin B2",
        amount: 0.35,
        unit: "mg",
        percentOfDailyNeeds: 20.5
      },
      {
        title: "Zinc",
        amount: 2.5,
        unit: "mg",
        percentOfDailyNeeds: 16.69
      },
      {
        title: "Vitamin B3",
        amount: 2.42,
        unit: "mg",
        percentOfDailyNeeds: 12.08
      },
      {
        title: "Selenium",
        amount: 4.2,
        unit: "µg",
        percentOfDailyNeeds: 5.99
      },
      {
        title: "Vitamin B5",
        amount: 0.43,
        unit: "mg",
        percentOfDailyNeeds: 4.32
      }
    ],
    ingredients: [
      {
        name: "cherry tomatoes",
        amount: 0.25,
        unit: "pint",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.02,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.09,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.13,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.12,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 2.95,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.83,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.09,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.02,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 15.38,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 8.16,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.66,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.59,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 257.88,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.03,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 4.74,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.05,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.15,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 21.29,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 33.12,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 578.46,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.63,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 3.31,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 26.97,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 13.01,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 13.01,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.17,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.8,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 1.12,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 10.65,
            unit: "mg"
          }
        ]
      },
      {
        name: "cooked quinoa",
        amount: 0.5,
        unit: "cups",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.49,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.18,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 1.78,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.58,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 0.8,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 2.59,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.11,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.1,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.21,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 38.85,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 21.28,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.58,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 2.59,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 159.1,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.1,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 19.7,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 1.0,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Calories",
            amount: 111.0,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 140.6,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 4.63,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.38,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 6.48,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 15.73,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 1.01,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 1.38,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 4.07,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 59.2,
            unit: "mg"
          }
        ]
      },
      {
        name: "extra firm tofu",
        amount: 0.25,
        unit: "",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.34,
            unit: "g"
          },
          {
            name: "Copper",
            amount: 0.2,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 1.88,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 0.98,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.1,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.08,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.3,
            unit: "g"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Potassium",
            amount: 152.46,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B2",
            amount: 0.03,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 1.98,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 1.05,
            unit: "g"
          },
          {
            name: "Calories",
            amount: 54.45,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 99.0,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.23,
            unit: "mg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 62.37,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 30.69,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.59,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 1.18,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 7.33,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 26.73,
            unit: "mg"
          }
        ]
      },
      {
        name: "garlic powder",
        amount: 0.25,
        unit: "teaspoon",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Trans Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 0.02,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.07,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 0.35,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 0.51,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.18,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 8.95,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 0.55,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 2.48,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 3.11,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 0.45,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 0.59,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 0.12,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 0.58,
            unit: "mg"
          }
        ]
      },
      {
        name: "lacinato kale",
        amount: 0.25,
        unit: "large bunch",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.04,
            unit: "g"
          },
          {
            name: "Copper",
            amount: 1.01,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.63,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.44,
            unit: "mg"
          },
          {
            name: "Vitamin B6",
            amount: 0.18,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.07,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.06,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 20.93,
            unit: "µg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.61,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 331.43,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.09,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 5.91,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.23,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.06,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 33.08,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 62.1,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 6743.25,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.68,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 475.74,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 81.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 25.65,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 101.25,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.38,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.99,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 2.89,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 31.73,
            unit: "mg"
          }
        ]
      },
      {
        name: "olive oil",
        amount: 0.06,
        unit: "cup",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 9.85,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 13.5,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 1.86,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 1.94,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 0.14,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 1.42,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 119.34,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 8.13,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 0.27,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 0.14,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.08,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 0.0,
            unit: "mg"
          }
        ]
      },
      {
        name: "pesto",
        amount: 0.13,
        unit: "cup",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 11.47,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Trans Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 0.99,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.5,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 1.98,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Cholesterol",
            amount: 2.48,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Fluoride",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 2.48,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 119.97,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 624.96,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 289.85,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 49.91,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.18,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 1.49,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 0.0,
            unit: "mg"
          }
        ]
      },
      {
        name: "salt",
        amount: 1.0,
        unit: "servings",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Fluoride",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 0.0,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 193.79,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 0.12,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 0.01,
            unit: "mg"
          }
        ]
      },
      {
        name: "smoked paprika",
        amount: 0.25,
        unit: "teaspoon",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.06,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Trans Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 0.05,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.17,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 0.25,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 0.26,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.15,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.03,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 11.4,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 0.27,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.04,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 1.41,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 1.57,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 246.27,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.05,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.4,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 0.34,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 1.15,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.11,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 0.07,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 0.89,
            unit: "mg"
          }
        ]
      },
      {
        name: "zucchini",
        amount: 0.5,
        unit: "medium",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.05,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.31,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.17,
            unit: "mg"
          },
          {
            name: "Trans Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 2.45,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.98,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.16,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.08,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 23.52,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 9.31,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.12,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.2,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 255.78,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.09,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 3.05,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.09,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.2,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 16.66,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 37.24,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 196.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.44,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 4.21,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 17.54,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 7.84,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 15.68,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.31,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.36,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 1.19,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 17.64,
            unit: "mg"
          }
        ]
      }
    ],
    caloricBreakdown: {
      percentProtein: 14.75,
      percentFat: 54.04,
      percentCarbs: 31.21
    },
    weightPerServing: {
      amount: 522,
      unit: "g"
    }
  },
  cuisines: [],
  dishTypes: ["salad"],
  diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
  occasions: ["father's day", "4th of july", "summer"],
  winePairing: {
    pairedWines: [],
    pairingText: "",
    productMatches: []
  },
  instructions:
    "Heat the grill over medium-hight heat.Mix together the quinoa and pesto and set aside.Cut the tofu into 4 even slices and put on a plate. Whisk together 1 tablespoon of oil, the paprika, garlic powder and a pinch of salt and pepper. Brush the slices of tofu with this marinade on each side.On a separate plate or baking sheet, lay the zucchini slices down and drizzle with 1 tablespoon of oil. Brush to cover and sprinkle with salt and pepper. Flip and repeat on the opposite side.Place the kale on the same plate/baking sheet if there's room and drizzle with the remaining 1 tablespoon of oil.Grill the tofu and zucchini for 3 - 4 minutes per side until the tofu has started to puff up a little and the zucchini is a little tender.With a 2 minutes left, place the kale leaves directly on the grill. Cook for 30 seconds - 1 minute per side until slightly wilted and starting to char.Remove everything from the grill and assemble the bowls. Chop the kale into bite sized pieces and divide the remaining ingredients evenly among four bowls. Garnish with a touch of salt and pepper (or a drizzle of tahini...yum!) and enjoy!",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "Heat the grill over medium-hight heat.",
          ingredients: [],
          equipment: [
            {
              id: 404706,
              name: "grill",
              image: "grill.jpg"
            }
          ]
        },
        {
          number: 2,
          step: "Mix together the quinoa and pesto and set aside.",
          ingredients: [
            {
              id: 93698,
              name: "pesto",
              image: "basil-pesto.png"
            }
          ],
          equipment: []
        },
        {
          number: 3,
          step: "Cut the tofu into 4 even slices and put on a plate.",
          ingredients: [],
          equipment: []
        },
        {
          number: 4,
          step:
            "Whisk together 1 tablespoon of oil, the paprika, garlic powder and a pinch of salt and pepper.",
          ingredients: [
            {
              id: 1102047,
              name: "salt and pepper",
              image: "salt-and-pepper.jpg"
            },
            {
              id: 1022020,
              name: "garlic powder",
              image: "garlic-powder.png"
            },
            {
              id: 2028,
              name: "paprika",
              image: "paprika.jpg"
            }
          ],
          equipment: [
            {
              id: 404661,
              name: "whisk",
              image: "whisk.png"
            }
          ]
        },
        {
          number: 5,
          step:
            "Brush the slices of tofu with this marinade on each side.On a separate plate or baking sheet, lay the zucchini slices down and drizzle with 1 tablespoon of oil.",
          ingredients: [
            {
              id: 11477,
              name: "zucchini",
              image: "zucchini.jpg"
            }
          ],
          equipment: [
            {
              id: 404727,
              name: "baking sheet",
              image: "baking-sheet.jpg"
            }
          ]
        },
        {
          number: 6,
          step:
            "Brush to cover and sprinkle with salt and pepper. Flip and repeat on the opposite side.",
          ingredients: [
            {
              id: 1102047,
              name: "salt and pepper",
              image: "salt-and-pepper.jpg"
            }
          ],
          equipment: []
        },
        {
          number: 7,
          step:
            "Place the kale on the same plate/baking sheet if there's room and drizzle with the remaining 1 tablespoon of oil.Grill the tofu and zucchini for 3 - 4 minutes per side until the tofu has started to puff up a little and the zucchini is a little tender.With a 2 minutes left, place the kale leaves directly on the grill. Cook for 30 seconds - 1 minute per side until slightly wilted and starting to char.",
          ingredients: [
            {
              id: 11477,
              name: "zucchini",
              image: "zucchini.jpg"
            },
            {
              id: 11233,
              name: "kale",
              image: "kale.jpg"
            }
          ],
          equipment: [
            {
              id: 404727,
              name: "baking sheet",
              image: "baking-sheet.jpg"
            },
            {
              id: 404706,
              name: "grill",
              image: "grill.jpg"
            }
          ],
          length: {
            number: 7,
            unit: "minutes"
          }
        },
        {
          number: 8,
          step:
            "Remove everything from the grill and assemble the bowls. Chop the kale into bite sized pieces and divide the remaining ingredients evenly among four bowls.",
          ingredients: [
            {
              id: 11233,
              name: "kale",
              image: "kale.jpg"
            }
          ],
          equipment: [
            {
              id: 404783,
              name: "bowl",
              image: "bowl.jpg"
            },
            {
              id: 404706,
              name: "grill",
              image: "grill.jpg"
            }
          ]
        },
        {
          number: 9,
          step:
            "Garnish with a touch of salt and pepper (or a drizzle of tahini...yum!) and enjoy!",
          ingredients: [
            {
              id: 1102047,
              name: "salt and pepper",
              image: "salt-and-pepper.jpg"
            }
          ],
          equipment: []
        }
      ]
    }
  ]
};

const recipeData_05 = {
  vegetarian: true,
  vegan: true,
  glutenFree: false,
  dairyFree: true,
  veryHealthy: true,
  cheap: false,
  veryPopular: true,
  sustainable: false,
  weightWatcherSmartPoints: 10,
  gaps: "no",
  lowFodmap: false,
  ketogenic: false,
  whole30: false,
  sourceUrl:
    "http://www.vegetariantimes.com/recipe/stir-fried-tofu-bento-box-with-sesame-soba-noodles-and-ginger-carrot-broccoli/",
  spoonacularSourceUrl:
    "https://spoonacular.com/stir-fried-tofu-bento-box-with-sesame-soba-noodles-and-ginger-carrot-broccoli-758875",
  aggregateLikes: 1586,
  spoonacularScore: 100.0,
  healthScore: 92.0,
  creditsText: "Vegetarian Times",
  sourceName: "Vegetarian Times",
  pricePerServing: 316.69,
  extendedIngredients: [
    {
      id: 10012023,
      aisle: "Ethnic Foods;Spices and Seasonings",
      image: "black-sesame-seeds-or-chia-seeds.png",
      consitency: "solid",
      name: "black sesame seeds",
      original: "2 tsp. black or white sesame seeds",
      originalString: "2 tsp. black or white sesame seeds",
      originalName: "black or white sesame seeds",
      amount: 2.0,
      unit: "tsp",
      meta: ["white", "black"],
      metaInformation: ["white", "black"],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "tsps",
          unitLong: "teaspoons"
        },
        metric: {
          amount: 2.0,
          unitShort: "tsps",
          unitLong: "teaspoons"
        }
      }
    },
    {
      id: 10011090,
      aisle: "Produce",
      image: "broccoli.jpg",
      consitency: "solid",
      name: "broccoli florets",
      original: "1 cup frozen broccoli florets, thawed",
      originalString: "1 cup frozen broccoli florets, thawed",
      originalName: "frozen broccoli florets, thawed",
      amount: 1.0,
      unit: "cup",
      meta: ["frozen", "thawed"],
      metaInformation: ["frozen", "thawed"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "cup",
          unitLong: "cup"
        },
        metric: {
          amount: 236.588,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 11124,
      aisle: "Produce",
      image: "sliced-carrot.png",
      consitency: "solid",
      name: "carrots",
      original: "2 Tbs. grated carrots",
      originalString: "2 Tbs. grated carrots",
      originalName: "grated carrots",
      amount: 2.0,
      unit: "Tbs",
      meta: ["grated"],
      metaInformation: ["grated"],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "Tbs",
          unitLong: "Tbs"
        },
        metric: {
          amount: 2.0,
          unitShort: "Tbs",
          unitLong: "Tbs"
        }
      }
    },
    {
      id: 11212,
      aisle: "Health Foods;Frozen",
      image: "edamame.png",
      consitency: "solid",
      name: "edamame",
      original: "¼ cup frozen shelled edamame, thawed",
      originalString: "¼ cup frozen shelled edamame, thawed",
      originalName: "frozen shelled edamame, thawed",
      amount: 0.25,
      unit: "cup",
      meta: ["frozen", "shelled", "thawed"],
      metaInformation: ["frozen", "shelled", "thawed"],
      measures: {
        us: {
          amount: 0.25,
          unitShort: "cups",
          unitLong: "cups"
        },
        metric: {
          amount: 59.147,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 16163,
      aisle: "Refrigerated;Produce;Ethnic Foods",
      image: "tofu.png",
      consitency: "solid",
      name: "extra firm tofu",
      original: "½ block (6 oz.) extra-firm tofu, cut into ½-inch cubes",
      originalString: "½ block (6 oz.) extra-firm tofu, cut into ½-inch cubes",
      originalName: "½ block extra-firm tofu, cut into ½-inch cubes",
      amount: 6.0,
      unit: "oz",
      meta: ["cut into ½-inch cubes"],
      metaInformation: ["cut into ½-inch cubes"],
      measures: {
        us: {
          amount: 6.0,
          unitShort: "oz",
          unitLong: "ounces"
        },
        metric: {
          amount: 170.097,
          unitShort: "g",
          unitLong: "grams"
        }
      }
    },
    {
      id: 11216,
      aisle: "Produce;Ethnic Foods;Spices and Seasonings",
      image: "ginger.png",
      consitency: "solid",
      name: "fresh ginger",
      original: "1 Tbs. finely minced fresh ginger",
      originalString: "1 Tbs. finely minced fresh ginger",
      originalName: "finely minced fresh ginger",
      amount: 1.0,
      unit: "Tbs",
      meta: ["fresh", "finely minced"],
      metaInformation: ["fresh", "finely minced"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "Tbs",
          unitLong: "Tb"
        },
        metric: {
          amount: 1.0,
          unitShort: "Tbs",
          unitLong: "Tb"
        }
      }
    },
    {
      id: 1022020,
      aisle: "Spices and Seasonings",
      image: "garlic-powder.png",
      consitency: "solid",
      name: "garlic powder",
      original: "2 tsp. garlic powder",
      originalString: "2 tsp. garlic powder",
      originalName: "garlic powder",
      amount: 2.0,
      unit: "tsp",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "tsps",
          unitLong: "teaspoons"
        },
        metric: {
          amount: 2.0,
          unitShort: "tsps",
          unitLong: "teaspoons"
        }
      }
    },
    {
      id: 93690,
      aisle: "Spices and Seasonings;Health Foods",
      image: "nutritional-yeast.png",
      consitency: "solid",
      name: "nutritional yeast",
      original: "2 Tbs. nutritional yeast",
      originalString: "2 Tbs. nutritional yeast",
      originalName: "nutritional yeast",
      amount: 2.0,
      unit: "Tbs",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "Tbs",
          unitLong: "Tbs"
        },
        metric: {
          amount: 2.0,
          unitShort: "Tbs",
          unitLong: "Tbs"
        }
      }
    },
    {
      id: 4058,
      aisle: "Ethnic Foods",
      image: "sesame-oil.png",
      consitency: "liquid",
      name: "sesame oil",
      original: "½ tsp. toasted sesame oil",
      originalString: "½ tsp. toasted sesame oil",
      originalName: "toasted sesame oil",
      amount: 0.5,
      unit: "tsp",
      meta: ["toasted"],
      metaInformation: ["toasted"],
      measures: {
        us: {
          amount: 0.5,
          unitShort: "tsps",
          unitLong: "teaspoons"
        },
        metric: {
          amount: 0.5,
          unitShort: "tsps",
          unitLong: "teaspoons"
        }
      }
    },
    {
      id: 20114,
      aisle: "Pasta and Rice;Ethnic Foods",
      image: "uncooked-soba-noodles.png",
      consitency: "solid",
      name: "soba noodles",
      original: "1 oz. uncooked soba noodles",
      originalString: "1 oz. uncooked soba noodles",
      originalName: "uncooked soba noodles",
      amount: 1.0,
      unit: "oz",
      meta: ["uncooked"],
      metaInformation: ["uncooked"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "oz",
          unitLong: "ounce"
        },
        metric: {
          amount: 28.35,
          unitShort: "g",
          unitLong: "grams"
        }
      }
    },
    {
      id: 10116124,
      aisle: "Ethnic Foods",
      image: "soy-sauce.jpg",
      consitency: "liquid",
      name: "tamari",
      original: "3 tsp. low-sodium tamari, divided",
      originalString: "3 tsp. low-sodium tamari, divided",
      originalName: "low-sodium tamari, divided",
      amount: 3.0,
      unit: "tsp",
      meta: ["low-sodium", "divided"],
      metaInformation: ["low-sodium", "divided"],
      measures: {
        us: {
          amount: 3.0,
          unitShort: "tsps",
          unitLong: "teaspoons"
        },
        metric: {
          amount: 3.0,
          unitShort: "tsps",
          unitLong: "teaspoons"
        }
      }
    },
    {
      id: 20080,
      aisle: "Baking",
      image: "flour.png",
      consitency: "solid",
      name: "whole-wheat flour",
      original: "2 Tbs. whole-wheat flour",
      originalString: "2 Tbs. whole-wheat flour",
      originalName: "whole-wheat flour",
      amount: 2.0,
      unit: "Tbs",
      meta: ["whole-wheat"],
      metaInformation: ["whole-wheat"],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "Tbs",
          unitLong: "Tbs"
        },
        metric: {
          amount: 2.0,
          unitShort: "Tbs",
          unitLong: "Tbs"
        }
      }
    }
  ],
  id: 758875,
  title:
    "Stir-fried Tofu Bento Box with Sesame Soba Noodles and Ginger-Carrot Broccoli",
  readyInMinutes: 45,
  servings: 1,
  image: "https://spoonacular.com/recipeImages/758875-556x370.jpg",
  imageType: "jpg",
  nutrition: {
    nutrients: [
      {
        title: "Calories",
        amount: 462.91,
        unit: "cal",
        percentOfDailyNeeds: 23.15
      },
      {
        title: "Fat",
        amount: 11.19,
        unit: "g",
        percentOfDailyNeeds: 17.21
      },
      {
        title: "Saturated Fat",
        amount: 1.53,
        unit: "g",
        percentOfDailyNeeds: 9.53
      },
      {
        title: "Carbohydrates",
        amount: 61.33,
        unit: "g",
        percentOfDailyNeeds: 20.44
      },
      {
        title: "Sugar",
        amount: 6.14,
        unit: "g",
        percentOfDailyNeeds: 6.83
      },
      {
        title: "Cholesterol",
        amount: 0.0,
        unit: "mg",
        percentOfDailyNeeds: 0.0
      },
      {
        title: "Sodium",
        amount: 1395.58,
        unit: "mg",
        percentOfDailyNeeds: 60.68
      },
      {
        title: "Protein",
        amount: 36.83,
        unit: "g",
        percentOfDailyNeeds: 73.66
      },
      {
        title: "Vitamin A",
        amount: 5580.35,
        unit: "IU",
        percentOfDailyNeeds: 111.61
      },
      {
        title: "Vitamin C",
        amount: 85.73,
        unit: "mg",
        percentOfDailyNeeds: 103.92
      },
      {
        title: "Vitamin K",
        amount: 107.37,
        unit: "µg",
        percentOfDailyNeeds: 102.25
      },
      {
        title: "Manganese",
        amount: 1.83,
        unit: "mg",
        percentOfDailyNeeds: 91.56
      },
      {
        title: "Folate",
        amount: 217.52,
        unit: "µg",
        percentOfDailyNeeds: 54.38
      },
      {
        title: "Phosphorus",
        amount: 504.74,
        unit: "mg",
        percentOfDailyNeeds: 50.47
      },
      {
        title: "Fiber",
        amount: 11.95,
        unit: "g",
        percentOfDailyNeeds: 47.81
      },
      {
        title: "Copper",
        amount: 0.89,
        unit: "mg",
        percentOfDailyNeeds: 44.55
      },
      {
        title: "Magnesium",
        amount: 168.57,
        unit: "mg",
        percentOfDailyNeeds: 42.14
      },
      {
        title: "Iron",
        amount: 7.23,
        unit: "mg",
        percentOfDailyNeeds: 40.17
      },
      {
        title: "Potassium",
        amount: 1396.62,
        unit: "mg",
        percentOfDailyNeeds: 39.9
      },
      {
        title: "Vitamin B1",
        amount: 0.57,
        unit: "mg",
        percentOfDailyNeeds: 38.24
      },
      {
        title: "Vitamin B6",
        amount: 0.56,
        unit: "mg",
        percentOfDailyNeeds: 28.22
      },
      {
        title: "Zinc",
        amount: 3.44,
        unit: "mg",
        percentOfDailyNeeds: 22.95
      },
      {
        title: "Vitamin B3",
        amount: 4.23,
        unit: "mg",
        percentOfDailyNeeds: 21.14
      },
      {
        title: "Vitamin B2",
        amount: 0.35,
        unit: "mg",
        percentOfDailyNeeds: 20.59
      },
      {
        title: "Selenium",
        amount: 14.01,
        unit: "µg",
        percentOfDailyNeeds: 20.01
      },
      {
        title: "Calcium",
        amount: 193.11,
        unit: "mg",
        percentOfDailyNeeds: 19.31
      },
      {
        title: "Vitamin B5",
        amount: 1.24,
        unit: "mg",
        percentOfDailyNeeds: 12.41
      },
      {
        title: "Vitamin E",
        amount: 1.37,
        unit: "mg",
        percentOfDailyNeeds: 9.15
      }
    ],
    ingredients: [
      {
        name: "black sesame seeds",
        amount: 2.0,
        unit: "tsp",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.75,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.16,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 1.99,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.1,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.47,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.03,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.03,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.28,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 3.88,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 1.02,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 1.38,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 18.72,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 0.94,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.87,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 22.92,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 25.16,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.36,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.18,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 0.44,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 39.0,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.31,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.58,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 0.71,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 14.04,
            unit: "mg"
          }
        ]
      },
      {
        name: "broccoli florets",
        amount: 1.0,
        unit: "cup",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.34,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.19,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 1.55,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 2.37,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.16,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.06,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.04,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 57.33,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 17.02,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.71,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 2.28,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 287.56,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.11,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 6.04,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.03,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.52,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 30.94,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 60.06,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 566.93,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.58,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 92.46,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 81.17,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 30.03,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 42.77,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.37,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.66,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 2.57,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 19.11,
            unit: "mg"
          }
        ]
      },
      {
        name: "carrots",
        amount: 2.0,
        unit: "Tbs",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.07,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Trans Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 1.42,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.84,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 5.7,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 2.64,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.2,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.03,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 96.0,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Fluoride",
            amount: 0.96,
            unit: "mg"
          },
          {
            name: "Vitamin B2",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 2.87,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.04,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.08,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 12.3,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 10.5,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 5011.8,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.29,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 3.96,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 1.77,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 20.7,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 9.9,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.07,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.09,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 0.28,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 3.6,
            unit: "mg"
          }
        ]
      },
      {
        name: "edamame",
        amount: 0.25,
        unit: "cup",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.5,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.13,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 2.02,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.4,
            unit: "mg"
          },
          {
            name: "Trans Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 0.84,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 2.02,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.08,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.24,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 120.51,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 21.82,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.26,
            unit: "mg"
          },
          {
            name: "Potassium",
            amount: 168.95,
            unit: "mg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.06,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 3.85,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.84,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.15,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 47.28,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 65.49,
            unit: "mg"
          },
          {
            name: "Vitamin B3",
            amount: 0.35,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 10.35,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 2.36,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 2.33,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 24.41,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.53,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.88,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 4.22,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 24.8,
            unit: "mg"
          }
        ]
      },
      {
        name: "extra firm tofu",
        amount: 6.0,
        unit: "oz",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.59,
            unit: "g"
          },
          {
            name: "Copper",
            amount: 0.34,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 3.23,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 1.68,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.17,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.13,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.51,
            unit: "g"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Potassium",
            amount: 261.95,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B2",
            amount: 0.06,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 3.4,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 1.8,
            unit: "g"
          },
          {
            name: "Calories",
            amount: 93.55,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 170.1,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.4,
            unit: "mg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 107.16,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 52.73,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 1.02,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 2.02,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 12.59,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 45.93,
            unit: "mg"
          }
        ]
      },
      {
        name: "fresh ginger",
        amount: 1.0,
        unit: "Tbs",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.05,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 0.12,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.14,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 0.77,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 2.02,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.05,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 29.05,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 1.24,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 5.6,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 2.38,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.05,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.01,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.35,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 0.91,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 1.12,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 0.13,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 3.01,
            unit: "mg"
          }
        ]
      },
      {
        name: "garlic powder",
        amount: 2.0,
        unit: "tsp",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.03,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.05,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.06,
            unit: "mg"
          },
          {
            name: "Trans Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 0.15,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.56,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.1,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.03,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.02,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 2.91,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 4.18,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 1.48,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 73.97,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 4.51,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.05,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 20.52,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 25.67,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.05,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.02,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.07,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 3.72,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 4.9,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.19,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.35,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 1.03,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 4.77,
            unit: "mg"
          }
        ]
      },
      {
        name: "nutritional yeast",
        amount: 2.0,
        unit: "Tbs",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.63,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Trans Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 3.75,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 300.0,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Fluoride",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 6.24,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 56.25,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.9,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 7.5,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 0.0,
            unit: "mg"
          }
        ]
      },
      {
        name: "sesame oil",
        amount: 0.5,
        unit: "tsp",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.89,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 2.25,
            unit: "g"
          },
          {
            name: "Sugar",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.32,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.03,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.94,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 19.89,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.31,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 0.0,
            unit: "mg"
          }
        ]
      },
      {
        name: "soba noodles",
        amount: 1.0,
        unit: "oz",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.05,
            unit: "g"
          },
          {
            name: "Copper",
            amount: 0.07,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.2,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.37,
            unit: "mg"
          },
          {
            name: "Vitamin B6",
            amount: 0.07,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.14,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.04,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 17.01,
            unit: "µg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Potassium",
            amount: 71.44,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B2",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 21.15,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.06,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.27,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 95.26,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 72.01,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.91,
            unit: "mg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 224.53,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 9.92,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.48,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.77,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 4.08,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 26.93,
            unit: "mg"
          }
        ]
      },
      {
        name: "tamari",
        amount: 3.0,
        unit: "tsp",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.02,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.09,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 0.31,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 0.14,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.04,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.01,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 3.24,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 6.91,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 0.14,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 38.16,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.03,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 1.0,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.01,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.07,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 10.8,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 23.4,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.71,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 1005.48,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 3.6,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.08,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.43,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 1.89,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 7.2,
            unit: "mg"
          }
        ]
      },
      {
        name: "whole-wheat flour",
        amount: 2.0,
        unit: "Tbs",
        nutrients: [
          {
            name: "Mono Unsaturated Fat",
            amount: 0.04,
            unit: "g"
          },
          {
            name: "Caffeine",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Copper",
            amount: 0.06,
            unit: "mg"
          },
          {
            name: "Fat",
            amount: 0.35,
            unit: "g"
          },
          {
            name: "Manganese",
            amount: 0.57,
            unit: "mg"
          },
          {
            name: "Sugar",
            amount: 0.06,
            unit: "g"
          },
          {
            name: "Fiber",
            amount: 1.5,
            unit: "g"
          },
          {
            name: "Vitamin B6",
            amount: 0.06,
            unit: "mg"
          },
          {
            name: "Vitamin B1",
            amount: 0.07,
            unit: "mg"
          },
          {
            name: "Saturated Fat",
            amount: 0.06,
            unit: "g"
          },
          {
            name: "Folate",
            amount: 6.16,
            unit: "µg"
          },
          {
            name: "Choline",
            amount: 4.37,
            unit: "mg"
          },
          {
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Vitamin E",
            amount: 0.1,
            unit: "mg"
          },
          {
            name: "Selenium",
            amount: 8.65,
            unit: "µg"
          },
          {
            name: "Potassium",
            amount: 50.82,
            unit: "mg"
          },
          {
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Alcohol",
            amount: 0.0,
            unit: "g"
          },
          {
            name: "Vitamin B2",
            amount: 0.02,
            unit: "mg"
          },
          {
            name: "Carbohydrates",
            amount: 10.08,
            unit: "g"
          },
          {
            name: "Poly Unsaturated Fat",
            amount: 0.16,
            unit: "g"
          },
          {
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg"
          },
          {
            name: "Vitamin B5",
            amount: 0.08,
            unit: "mg"
          },
          {
            name: "Calories",
            amount: 47.6,
            unit: "cal"
          },
          {
            name: "Phosphorus",
            amount: 49.98,
            unit: "mg"
          },
          {
            name: "Vitamin A",
            amount: 1.26,
            unit: "IU"
          },
          {
            name: "Vitamin B3",
            amount: 0.69,
            unit: "mg"
          },
          {
            name: "Vitamin K",
            amount: 0.27,
            unit: "µg"
          },
          {
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg"
          },
          {
            name: "Sodium",
            amount: 0.28,
            unit: "mg"
          },
          {
            name: "Calcium",
            amount: 4.76,
            unit: "mg"
          },
          {
            name: "Zinc",
            amount: 0.36,
            unit: "mg"
          },
          {
            name: "Iron",
            amount: 0.5,
            unit: "mg"
          },
          {
            name: "Protein",
            amount: 1.85,
            unit: "g"
          },
          {
            name: "Magnesium",
            amount: 19.18,
            unit: "mg"
          }
        ]
      }
    ],
    caloricBreakdown: {
      percentProtein: 29.86,
      percentFat: 20.41,
      percentCarbs: 49.73
    },
    weightPerServing: {
      amount: 425,
      unit: "g"
    }
  },
  cuisines: [],
  dishTypes: ["lunch", "main course", "main dish", "dinner"],
  diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
  occasions: [],
  winePairing: {},
  instructions:
    "1. Cook noodles in boiling salted water 4 minutes. Drain, rinse with cold water, and drain again. Toss with 1 tsp. tamari, sesame seeds, and sesame oil; season with white pepper to taste.2. Stir together flour and garlic powder in medium bowl; add tofu, and toss to coat. Season with black pepper to taste. 3. Spray skillet with olive oil cooking spray; heat over medium-high heat, add tofu, and sauté 5 minutes, or until golden brown. Transfer to plate; sprinkle with 1 tsp. tamari; toss with nutritional yeast. 4. Return skillet to heat. Add 2 Tbs. water and remaining 1 tsp. tamari, then broccoli, carrots, and ginger. Cover, and simmer 3 minutes, or until broccoli is warmed through.5. To assemble: Pack soba noodles in 1 section of bento box or portable container. Pack 1/2 cup tofu and 1/2 cup broccoli mixture in other sections, reserving remaining tofu and broccoli for use in other lunch dishes. Fill in last section with edamame. Refrigerate, uncovered, until all ingredients are chilled thoroughly. Cover box, and refrigerate until ready to serve.",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "Cook noodles in boiling salted water 4 minutes.",
          ingredients: [],
          equipment: [],
          length: {
            number: 4,
            unit: "minutes"
          }
        },
        {
          number: 2,
          step:
            "Drain, rinse with cold water, and drain again. Toss with 1 tsp. tamari, sesame seeds, and sesame oil; season with white pepper to taste.",
          ingredients: [
            {
              id: 12023,
              name: "sesame seeds",
              image: "sesame-seeds.png"
            },
            {
              id: 4058,
              name: "sesame oil",
              image: "sesame-oil.png"
            },
            {
              id: 10116124,
              name: "tamari",
              image: "soy-sauce.jpg"
            }
          ],
          equipment: []
        },
        {
          number: 3,
          step:
            "Stir together flour and garlic powder in medium bowl; add tofu, and toss to coat. Season with black pepper to taste.",
          ingredients: [
            {
              id: 1022020,
              name: "garlic powder",
              image: "garlic-powder.png"
            }
          ],
          equipment: [
            {
              id: 404783,
              name: "bowl",
              image: "bowl.jpg"
            }
          ]
        },
        {
          number: 4,
          step:
            "Spray skillet with olive oil cooking spray; heat over medium-high heat, add tofu, and sauté 5 minutes, or until golden brown.",
          ingredients: [],
          equipment: [
            {
              id: 404645,
              name: "frying pan",
              image: "pan.png"
            }
          ],
          length: {
            number: 5,
            unit: "minutes"
          }
        },
        {
          number: 5,
          step:
            "Transfer to plate; sprinkle with 1 tsp. tamari; toss with nutritional yeast.",
          ingredients: [
            {
              id: 93690,
              name: "nutritional yeast",
              image: "nutritional-yeast.png"
            },
            {
              id: 10116124,
              name: "tamari",
              image: "soy-sauce.jpg"
            }
          ],
          equipment: []
        },
        {
          number: 6,
          step: "Return skillet to heat.",
          ingredients: [],
          equipment: [
            {
              id: 404645,
              name: "frying pan",
              image: "pan.png"
            }
          ]
        },
        {
          number: 7,
          step:
            "Add 2 Tbs. water and remaining 1 tsp. tamari, then broccoli, carrots, and ginger. Cover, and simmer 3 minutes, or until broccoli is warmed through.",
          ingredients: [
            {
              id: 11090,
              name: "broccoli",
              image: "broccoli.jpg"
            },
            {
              id: 11124,
              name: "carrot",
              image: "sliced-carrot.png"
            },
            {
              id: 11216,
              name: "ginger",
              image: "ginger.png"
            },
            {
              id: 10116124,
              name: "tamari",
              image: "soy-sauce.jpg"
            }
          ],
          equipment: [],
          length: {
            number: 3,
            unit: "minutes"
          }
        },
        {
          number: 8,
          step:
            "To assemble: Pack soba noodles in 1 section of bento box or portable container. Pack 1/2 cup tofu and 1/2 cup broccoli mixture in other sections, reserving remaining tofu and broccoli for use in other lunch dishes. Fill in last section with edamame. Refrigerate, uncovered, until all ingredients are chilled thoroughly. Cover box, and refrigerate until ready to serve.",
          ingredients: [
            {
              id: 20114,
              name: "soba noodles",
              image: "uncooked-soba-noodles.png"
            },
            {
              id: 11090,
              name: "broccoli",
              image: "broccoli.jpg"
            },
            {
              id: 11212,
              name: "edamame",
              image: "edamame.png"
            }
          ],
          equipment: []
        }
      ]
    }
  ]
};

const getDietEntrySummary = resData => {
  const entrySummary = {
    ENERC_KCAL: 0,
    percentProtein: 0,
    percentFat: 0,
    percentCarbs: 0,
    completeNutrition: {},
    weightPerServing: [],
    metaInfo: {},
    rawNutritionData: {}
  };

  resData.forEach(item => {
    if (item.nutrition) {
      let ENERC_KCAL = item.nutrition.nutrients.find(
        nutrient => nutrient.title === "Calories"
      ).amount;
      if (ENERC_KCAL) {
        if (item.nutrition.caloricBreakdown) {
          Object.keys(entrySummary).forEach(percentKey => {
            if (
              percentKey === "percentProtein" ||
              percentKey === "percentFat" ||
              percentKey === "percentCarbs"
            ) {
              entrySummary[percentKey] = (
                (((entrySummary[percentKey] / 100) * entrySummary.ENERC_KCAL +
                  (item.nutrition.caloricBreakdown[percentKey] / 100) *
                    ENERC_KCAL) /
                  (entrySummary.ENERC_KCAL + ENERC_KCAL)) *
                100
              ).toFixed(2);
            }
          });
        }
        entrySummary.ENERC_KCAL = entrySummary.ENERC_KCAL + ENERC_KCAL;

        if (item.nutrition.nutrients) {
          item.nutrition.nutrients.forEach(nutrient => {
            if (!entrySummary.completeNutrition[nutrient]) {
              entrySummary.completeNutrition[nutrient.title] = {};
            }
            if (entrySummary.completeNutrition[nutrient.title].amount) {
              entrySummary.completeNutrition[nutrient.title].amount =
                entrySummary.completeNutrition[nutrient].amount +
                nutrient.amount;
            } else {
              entrySummary.completeNutrition[nutrient.title].amount =
                nutrient.amount;
              entrySummary.completeNutrition[nutrient.title].unit =
                nutrient.unit;
            }
            if (
              entrySummary.completeNutrition[nutrient.title].percentOfDailyNeeds
            ) {
              entrySummary.completeNutrition[
                nutrient.title
              ].percentOfDailyNeeds =
                entrySummary.completeNutrition[nutrient.title]
                  .percentOfDailyNeeds + nutrient.percentOfDailyNeeds;
            } else {
              entrySummary.completeNutrition[
                nutrient.title
              ].percentOfDailyNeeds = nutrient.percentOfDailyNeeds;
            }
          });
        }
      }

      entrySummary.weightPerServing.push({
        ...item.nutrition.weightPerServing,
        ingredientName: item.name || item.originalName
      });
    }

    let newItemKeyName = item.name || item.originalName;

    Object.keys(item).forEach(itemKey => {
      if (itemKey !== "nutrition") {
        if (!entrySummary.metaInfo[newItemKeyName]) {
          entrySummary.metaInfo[newItemKeyName] = {};
        }
        entrySummary.metaInfo[newItemKeyName][itemKey] = item[itemKey];
      } else {
        entrySummary.rawNutritionData[newItemKeyName] = item[itemKey];
      }
    });
  });

  return entrySummary;
};

const getMealPlanSummary = recipeData => {
  const entrySummary = {
    ENERC_KCAL: 0,
    percentProtein: 0,
    percentFat: 0,
    percentCarbs: 0,
    recipeTags: [],
    weightPerServing: {},
    completeNutrition: {},
    metaInfo: {},
    rawNutritionData: {}
  };

  let ENERC_KCAL;

  if (recipeData.nutrition) {
    ENERC_KCAL = recipeData.nutrition.nutrients.find(
      nutrient => nutrient.title === "Calories"
    ).amount;
    if (ENERC_KCAL) {
      entrySummary.ENERC_KCAL = ENERC_KCAL;
      if (recipeData.nutrition.caloricBreakdown) {
        entrySummary.percentProtein =
          recipeData.nutrition.caloricBreakdown.percentProtein;
        entrySummary.percentCarbs =
          recipeData.nutrition.caloricBreakdown.percentCarbs;
        entrySummary.percentFat =
          recipeData.nutrition.caloricBreakdown.percentFat;
      }

      if (recipeData.nutrition.nutrients) {
        recipeData.nutrition.nutrients.forEach(nutrient => {
          if (!entrySummary.completeNutrition[nutrient]) {
            entrySummary.completeNutrition[nutrient.title] = {};
          }
          if (entrySummary.completeNutrition[nutrient.title].amount) {
            entrySummary.completeNutrition[nutrient.title].amount =
              entrySummary.completeNutrition[nutrient].amount + nutrient.amount;
          } else {
            entrySummary.completeNutrition[nutrient.title].amount =
              nutrient.amount;
            entrySummary.completeNutrition[nutrient.title].unit = nutrient.unit;
          }
          if (
            entrySummary.completeNutrition[nutrient.title].percentOfDailyNeeds
          ) {
            entrySummary.completeNutrition[nutrient.title].percentOfDailyNeeds =
              entrySummary.completeNutrition[nutrient.title]
                .percentOfDailyNeeds + nutrient.percentOfDailyNeeds;
          } else {
            entrySummary.completeNutrition[nutrient.title].percentOfDailyNeeds =
              nutrient.percentOfDailyNeeds;
          }
        });
      }
    }

    entrySummary.weightPerServing = recipeData.nutrition.weightPerServing;
  }

  entrySummary.recipeTags = Object.keys(recipeData).filter(
    recipeDataKey => String(recipeData[recipeDataKey]) === "true"
  );

  Object.keys(recipeData).forEach(itemKey => {
    entrySummary[itemKey] = recipeData[itemKey];
  });

  return entrySummary;
};

const getDaySummary = dayEntrySummaries => {
  const daySummary = {
    numEntries: 0,
    ENERC_KCAL: 0,
    percentProtein: 0,
    percentFat: 0,
    percentCarbs: 0,
    completeNutrition: {}
  };
  if (dayEntrySummaries.length === 0) {
    return daySummary;
  }

  daySummary.numEntries = dayEntrySummaries.length;
  dayEntrySummaries.forEach(entrySummary => {
    daySummary["percentCarbs"] = +(
      (((daySummary["percentCarbs"] / 100) * daySummary.ENERC_KCAL +
        (entrySummary["percentCarbs"] / 100) * entrySummary.ENERC_KCAL) /
        (daySummary.ENERC_KCAL + entrySummary.ENERC_KCAL)) *
      100
    ).toFixed(2);
    daySummary["percentProtein"] = +(
      (((daySummary["percentProtein"] / 100) * daySummary.ENERC_KCAL +
        (entrySummary["percentProtein"] / 100) * entrySummary.ENERC_KCAL) /
        (daySummary.ENERC_KCAL + entrySummary.ENERC_KCAL)) *
      100
    ).toFixed(2);
    daySummary["percentFat"] = +(
      (((daySummary["percentFat"] / 100) * daySummary.ENERC_KCAL +
        (entrySummary["percentFat"] / 100) * entrySummary.ENERC_KCAL) /
        (daySummary.ENERC_KCAL + entrySummary.ENERC_KCAL)) *
      100
    ).toFixed(2);
    daySummary.ENERC_KCAL += entrySummary.ENERC_KCAL;
  });

  dayEntrySummaries.forEach(entrySummary => {
    if (entrySummary.completeNutrition) {
      Object.keys(entrySummary.completeNutrition).forEach(nutrient => {
        if (
          !entrySummary.completeNutrition.hasOwnProperty(nutrient) ||
          nutrient === "$init"
        ) {
          return;
        }
        if (!daySummary.completeNutrition[nutrient]) {
          daySummary.completeNutrition[nutrient] = {};
        }
        if (daySummary.completeNutrition[nutrient].amount) {
          daySummary.completeNutrition[nutrient].amount = (
            Math.round(+daySummary.completeNutrition[nutrient].amount * 100) /
              100 +
            Math.round(+entrySummary.completeNutrition[nutrient].amount * 100) /
              100
          ).toFixed(2);
        } else {
          daySummary.completeNutrition[nutrient].amount = (
            Math.round(+entrySummary.completeNutrition[nutrient].amount * 100) /
            100
          ).toFixed(2);
          daySummary.completeNutrition[nutrient].unit =
            entrySummary.completeNutrition[nutrient].unit;
        }
        if (daySummary.completeNutrition[nutrient].percentOfDailyNeeds) {
          daySummary.completeNutrition[nutrient].percentOfDailyNeeds = (
            Math.round(
              +daySummary.completeNutrition[nutrient].percentOfDailyNeeds * 100
            ) /
              100 +
            Math.round(
              +entrySummary.completeNutrition[nutrient].percentOfDailyNeeds *
                100
            ) /
              100
          ).toFixed(2);
        } else {
          daySummary.completeNutrition[nutrient].percentOfDailyNeeds = (
            Math.round(
              +entrySummary.completeNutrition[nutrient].percentOfDailyNeeds *
                100
            ) / 100
          ).toFixed(2);
        }
      });
    }
  });

  return daySummary;
};

const createEntry = (resData, resourceType) => {
  let entrySummary = getDietEntrySummary(resData);

  let ifQueryWithAnd = Object.keys(entrySummary.metaInfo).some(metaInfoKey =>
    metaInfoKey.includes("and")
  );
  let parsedQuery = Object.keys(entrySummary.metaInfo).join(
    !ifQueryWithAnd ? ", " : " "
  );
  parsedQuery = parsedQuery.replace(/,([^,]*)$/, " and $1");

  const entryObj = {
    title: parsedQuery,
    parsedQuery,
    ...entrySummary,
    [resourceIdAccessor]: resourceTypes.dietEntry,
    className: "dietEntry"
  };

  return entryObj;
};

const createMealPlan = (recipeDetail, resourceType) => {
  const recipeId = recipeDetail.id;

  let mealPlanSummary = getMealPlanSummary(recipeDetail);

  const mealPlanEntry = {
    ...mealPlanSummary,
    recipeId,
    [resourceIdAccessor]: resourceType || resourceTypes.mealPlan,
    className: resourceType || "mealPlan"
  };
  delete mealPlanEntry.id;
  return mealPlanEntry;
};

const createDaySummary = (prevEntry, newEntry, entries) => {
  //? newEntry given and null prevEntry indicates addition of entry to the day summaries
  //? null newEntry and prevEntry given indicates deletion of entry from existing day summaries
  //? both newEntry and prevEntry given indicates updation of entry within the day summaries
  //? start dates & resourceId indicate type of update: timeslot change or day change or resource type change

  let selectedResourceType, otherResourceType, date, dayEntries;
  let prevResourceType,
    newResourceType,
    prevDate,
    newDate,
    prevDateEntries,
    newDateEntries;

  if (!newEntry && entries && prevEntry) {
    selectedResourceType = resourceTypes.dietEntry;
    otherResourceType = resourceTypes.mealPlan;
    date = new Date(moment(prevEntry.start));
    dayEntries = entries.filter(entry => {
      let isSame =
        moment(entry.start).isSame(date, "year") &&
        moment(entry.start).isSame(date, "month") &&
        moment(entry.start).isSame(date, "day");
      return isSame ? true : false;
    });
  } else if (newEntry && entries && !prevEntry) {
    selectedResourceType = newEntry[resourceIdAccessor];
    otherResourceType = resourceMap.find(
      resource => resource[resourceIdAccessor] !== selectedResourceType
    )[resourceIdAccessor];
    date = new Date(moment(newEntry.start));
    dayEntries = entries.filter(entry => {
      let isSame =
        moment(entry.start).isSame(date, "year") &&
        moment(entry.start).isSame(date, "month") &&
        moment(entry.start).isSame(date, "day");
      return isSame ? true : false;
    });
  } else if (newEntry && entries && prevEntry) {
    prevResourceType = prevEntry[resourceIdAccessor];
    newResourceType = newEntry[resourceIdAccessor];
    prevDate = new Date(moment(prevEntry.start));
    newDate = new Date(moment(newEntry.start));
    prevDateEntries = entries.filter(entry => {
      let isSame =
        moment(entry.start).isSame(prevDate, "year") &&
        moment(entry.start).isSame(prevDate, "month") &&
        moment(entry.start).isSame(prevDate, "day");
      return isSame ? true : false;
    });
    newDateEntries = entries.filter(entry => {
      let isSame =
        moment(entry.start).isSame(newDate, "year") &&
        moment(entry.start).isSame(newDate, "month") &&
        moment(entry.start).isSame(newDate, "day");
      return isSame ? true : false;
    });
  }

  //* returning daySummary objects for each resourceType

  if (selectedResourceType && otherResourceType && date && dayEntries) {
    let selectedResourceDayEntries = dayEntries.filter(
      entry => entry[resourceIdAccessor] === selectedResourceType
    );

    let id_selected = `${moment(date).format(
      "Do MMM YYYY"
    )}-${selectedResourceType}-summary`;
    let displayDate_selected = moment(date).format("Do MMM YYYY");

    let daySummary_selected = getDaySummary(selectedResourceDayEntries);

    let selectedResourceDaySummaryObj = {
      id: id_selected,
      [resourceIdAccessor]: selectedResourceType,
      dateId: id_selected, //? used to identify and operate on the daySummary objects
      date, //? date object representing a entry's start date of that particular day
      displayDate: displayDate_selected,
      title: `${
        resourceMap.find(
          res => res[resourceIdAccessor] === selectedResourceType
        )[resourceTitleAccessor]
      } Analysis for ${displayDate_selected}`,
      ...daySummary_selected
    };

    let otherResourceDayEntries = dayEntries.filter(
      entry => entry[resourceIdAccessor] === otherResourceType
    );

    let id_other = `${moment(date).format(
      "Do MMM YYYY"
    )}-${otherResourceType}-summary`;
    let displayDate_other = moment(date).format("Do MMM YYYY");

    let daySummary_other = getDaySummary(otherResourceDayEntries);

    let otherResourceDaySummaryObj = {
      id: id_other,
      [resourceIdAccessor]: otherResourceType,
      dateId: id_other, //? used to identify and operate on the daySummary objects
      date, //? date object representing a entry's start date of that particular day
      displayDate: displayDate_other,
      title: `${
        resourceMap.find(res => res[resourceIdAccessor] === otherResourceType)[
          resourceTitleAccessor
        ]
      } Analysis for ${displayDate_other}`,
      ...daySummary_other
    };

    return [selectedResourceDaySummaryObj, otherResourceDaySummaryObj];
  }

  if (
    prevResourceType &&
    newResourceType &&
    prevDate &&
    newDate &&
    prevDateEntries &&
    newDateEntries
  ) {
    let prevDateSelectedResourceEntries = prevDateEntries.filter(
      entry => entry[resourceIdAccessor] === prevResourceType
    );

    let id_prevSlot = `${moment(prevDate).format(
      "Do MMM YYYY"
    )}-${prevResourceType}-summary`;
    let displayDate_prevSlot = moment(prevDate).format("Do MMM YYYY");

    let daySummary_prevSlot = getDaySummary(prevDateSelectedResourceEntries);

    let prevDateSelectedResourceSummaryObj = {
      id: id_prevSlot,
      [resourceIdAccessor]: prevResourceType,
      dateId: id_prevSlot, //? used to identify and operate on the daySummary objects
      date: prevDate, //? date object representing a entry's start date of that particular day
      displayDate: displayDate_prevSlot,
      title: `${
        resourceMap.find(res => res[resourceIdAccessor] === prevResourceType)[
          resourceTitleAccessor
        ]
      } Analysis for ${displayDate_prevSlot}`,
      ...daySummary_prevSlot
    };

    let otherResourceDayEntries = newDateEntries.filter(
      entry => entry[resourceIdAccessor] === newResourceType
    );

    let id_newSlot = `${moment(newDate).format(
      "Do MMM YYYY"
    )}-${newResourceType}-summary`;
    let displayDate_newSlot = moment(newDate).format("Do MMM YYYY");

    let daySummary_newSlot = getDaySummary(otherResourceDayEntries);

    let newDateSelectedResourceSummaryObj = {
      id: id_newSlot,
      [resourceIdAccessor]: newResourceType,
      dateId: id_newSlot, //? used to identify and operate on the daySummary objects
      date: newDate, //? date object representing a entry's start date of that particular day
      displayDate: displayDate_newSlot,
      title: `${
        resourceMap.find(res => res[resourceIdAccessor] === newResourceType)[
          resourceTitleAccessor
        ]
      } Analysis for ${displayDate_newSlot}`,
      ...daySummary_newSlot
    };

    return [
      prevDateSelectedResourceSummaryObj,
      newDateSelectedResourceSummaryObj
    ];
  }
};

const createDaysFromAllEntries = allEntries => {
  let allDaySummaries = [];
  let entries = [...allEntries];
  entries.forEach(entry => {
    let [
      selectedResourceDaySummaryObj,
      otherResourceDaySummaryObj
    ] = createDaySummary(entry, entries);
    !allDaySummaries.find(
      daySum => daySum.id === selectedResourceDaySummaryObj.id
    ) && allDaySummaries.push(selectedResourceDaySummaryObj);
    !allDaySummaries.find(
      daySum => daySum.id === otherResourceDaySummaryObj.id
    ) && allDaySummaries.push(otherResourceDaySummaryObj);
  });
  return allDaySummaries;
};

// console.log(getDietEntrySummary(resData_03));
// console.log(getMealPlanSummary(recipeData_01));
// console.log(
//   getDaySummary([
//     getDietEntrySummary(resData_03),
//     getDietEntrySummary(resData_02)
//   ])
// );
// console.log(
//   getDaySummary([
//     getMealPlanSummary(recipeData_01),
//     getMealPlanSummary(recipeData_05)
//   ])
// );
// console.log(createEntry(resData_03));
// console.log(createMealPlan(recipeData_01));
// console.log(getDaySummary([createEntry(resData_03), createEntry(resData_02)]));
// console.log(
//   getDaySummary([createMealPlan(recipeData_01), createMealPlan(recipeData_05)])
// );

// console.log(
//   createDaySummary(null, createEntry(resData_02), [createEntry(resData_02)])
// );
