import moment from "moment";
const now = new Date();

export const entries = [
  {
    id: 1,
    title: "hummus and pita",
    mealSlot: "dinner", // {key: label, value: Moment/Date} default: now -> Date.now
    start: new Date(
      moment("2019-10-21")
        .hour(20)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment("2019-10-21")
        .hour(20)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    // start: new Date(
    //   moment()
    //     .subtract(1, "day")
    //     .hour(20)
    //     .minutes(30)
    // ), //? custom-time || Date.now
    // end: new Date(
    //   moment()
    //     .subtract(1, "day")
    //     .hour(20)
    //     .minutes(45)
    // ), //? custom-time || start + 15-mins,
    foodQuery: "2 servings of hummus and pita bread", // original query,
    parsedQuery: "hummus and pita", // parsed query,
    analysis: [
      {
        food: "hummus",
        unit: "serving",
        quantity: 2,
        image: "hummus.jpg",
        nutrition: {
          ENERC_KCAL: {
            label: "Energy",
            amount: 92.96,
            unit: "kcal",
            percentOfDailyNeeds: 4.65
          },
          PROCNT: {
            label: "Protien",
            amount: 4.42,
            unit: "g",
            percentOfDailyNeeds: 8.85
          },
          CHOCDF: {
            label: "Carbs",
            amount: 8,
            unit: "g",
            percentOfDailyNeeds: 2.67
          },
          FAT: {
            label: "Fat",
            amount: 5.38,
            unit: "g",
            percentOfDailyNeeds: 8.27
          },
          SUGAR: {
            label: "Sugar",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          },
          FIBTG: {
            label: "Fiber",
            amount: 3.36,
            unit: "g",
            percentOfDailyNeeds: 13.44
          }
        },
        caloricBreakdown: {
          percentProtein: 22.04,
          percentFat: 49.33,
          percentCarbs: 32.63
        }
      },
      {
        food: "pita",
        unit: "serving",
        quantity: 2,
        image: "pita-bread.jpg",
        nutrition: {
          ENERC_KCAL: {
            label: "Energy",
            amount: 308.0,
            unit: "kcal",
            percentOfDailyNeeds: 15.4
          },
          PROCNT: {
            label: "Protien",
            amount: 10.19,
            unit: "g",
            percentOfDailyNeeds: 20.38
          },
          CHOCDF: {
            label: "Carbs",
            amount: 62.38,
            unit: "g",
            percentOfDailyNeeds: 20.79
          },
          FAT: {
            label: "Fat",
            amount: 1.34,
            unit: "g",
            percentOfDailyNeeds: 2.07
          },
          SUGAR: {
            label: "Sugar",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          },
          FIBTG: {
            label: "Fiber",
            amount: 2.46,
            unit: "g",
            percentOfDailyNeeds: 9.86
          }
        },
        caloricBreakdown: {
          percentProtein: 13.48,
          percentFat: 4.0,
          percentCarbs: 82.52
        }
      }
    ]
  },
  {
    id: 2,
    title: "brown rice and chickpeas",
    mealSlot: "now", // {key: label, value: Moment/Date} default: now -> Date.now
    start: new Date(
      moment("2019-10-22")
        .hour(12)
        .minutes(20)
    ), //? custom-time || Date.now
    end: new Date(
      moment("2019-10-22")
        .hour(12)
        .minutes(35)
    ), //? custom-time || start + 15-mins,
    // start: new Date(
    //   moment()
    //     .hour(12)
    //     .minutes(20)
    // ), //? custom-time || Date.now
    // end: new Date(
    //   moment()
    //     .hour(12)
    //     .minutes(35)
    // ), //? custom-time || start + 15-mins,
    foodQuery: "1 cup brown rice and 10 oz chickpeas", // original query,
    parsedQuery: "brown rice and chickpeas", // parsed query,
    analysis: [
      {
        food: "brown rice",
        unit: "cup",
        quantity: 1,
        image: "uncooked-brown-rice.png",
        nutrition: {
          ENERC_KCAL: {
            label: "Energy",
            amount: 687.8,
            unit: "kcal",
            percentOfDailyNeeds: 34.39
          },
          PROCNT: {
            label: "Protien",
            amount: 14.25,
            unit: "g",
            percentOfDailyNeeds: 28.5
          },
          CHOCDF: {
            label: "Carbs",
            amount: 144.72,
            unit: "g",
            percentOfDailyNeeds: 48.24
          },
          FAT: {
            label: "Fat",
            amount: 5.09,
            unit: "g",
            percentOfDailyNeeds: 7.83
          },
          SUGAR: {
            label: "Sugar",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          },
          FIBTG: {
            label: "Fiber",
            amount: 6.46,
            unit: "g",
            percentOfDailyNeeds: 25.84
          }
        },
        caloricBreakdown: {
          percentProtein: 8.36,
          percentFat: 6.72,
          percentCarbs: 84.92
        }
      },
      {
        food: "chickpeas",
        unit: "oz",
        quantity: 10,
        image: "chickpeas.png",
        nutrition: {
          ENERC_KCAL: {
            label: "Energy",
            amount: 464.93,
            unit: "kcal",
            percentOfDailyNeeds: 23.25
          },
          PROCNT: {
            label: "Protien",
            amount: 25.12,
            unit: "g",
            percentOfDailyNeeds: 50.24
          },
          CHOCDF: {
            label: "Carbs",
            amount: 77.73,
            unit: "g",
            percentOfDailyNeeds: 25.91
          },
          FAT: {
            label: "Fat",
            amount: 7.34,
            unit: "g",
            percentOfDailyNeeds: 11.3
          },
          SUGAR: {
            label: "Sugar",
            amount: 13.61,
            unit: "g",
            percentOfDailyNeeds: 15.12
          },
          FIBTG: {
            label: "Fiber",
            amount: 21.55,
            unit: "g",
            percentOfDailyNeeds: 86.22
          }
        },
        caloricBreakdown: {
          percentProtein: 21.04,
          percentFat: 13.84,
          percentCarbs: 65.12
        }
      }
    ]
  },
  {
    id: 3,
    title: "coffee and croissant",
    mealSlot: "now", // {key: label, value: Moment/Date} default: now -> Date.now
    start: new Date(
      moment("2019-10-22")
        .hour(16)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment("2019-10-22")
        .hour(16)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    // start: new Date(
    //   moment()
    //     .hour(16)
    //     .minutes(30)
    // ), //? custom-time || Date.now
    // end: new Date(
    //   moment()
    //     .hour(16)
    //     .minutes(45)
    // ), //? custom-time || start + 15-mins,
    foodQuery: "1 cup of coffee and a croissant", // original query,
    parsedQuery: "coffee and croissant", // parsed query,
    analysis: [
      {
        food: "coffee",
        unit: "serving",
        quantity: 1,
        image: "brewed-coffee.jpg",
        nutrition: {
          ENERC_KCAL: {
            label: "Energy",
            amount: 2.37,
            unit: "kcal",
            percentOfDailyNeeds: 0.12
          },
          PROCNT: {
            label: "Protien",
            amount: 0.28,
            unit: "g",
            percentOfDailyNeeds: 0.57
          },
          CHOCDF: {
            label: "Carbs",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          },
          FAT: {
            label: "Fat",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          },
          SUGAR: {
            label: "Sugar",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          },
          FIBTG: {
            label: "Fiber",
            amount: 6.46,
            unit: "g",
            percentOfDailyNeeds: 25.84
          },
          Other: {
            label: "Caffeine",
            amount: 94.8,
            unit: "mg",
            percentOfDailyNeeds: 31.6
          }
        },
        caloricBreakdown: {
          percentProtein: 72.73,
          percentFat: 27.27,
          percentCarbs: 0.0
        }
      },
      {
        food: "croissant",
        unit: "serving",
        quantity: 1,
        image: "croissants.jpg",
        nutrition: {
          ENERC_KCAL: {
            label: "Energy",
            amount: 231.42,
            unit: "kcal",
            percentOfDailyNeeds: 11.57
          },
          PROCNT: {
            label: "Protien",
            amount: 4.67,
            unit: "g",
            percentOfDailyNeeds: 9.35
          },
          CHOCDF: {
            label: "Carbs",
            amount: 26.11,
            unit: "g",
            percentOfDailyNeeds: 8.7
          },
          FAT: {
            label: "Fat",
            amount: 11.97,
            unit: "g",
            percentOfDailyNeeds: 22.42
          },
          SUGAR: {
            label: "Sugar",
            amount: 6.42,
            unit: "g",
            percentOfDailyNeeds: 7.13
          },
          FIBTG: {
            label: "Fiber",
            amount: 1.48,
            unit: "g",
            percentOfDailyNeeds: 5.93
          }
        },
        caloricBreakdown: {
          percentProtein: 8.1,
          percentFat: 46.67,
          percentCarbs: 45.23
        }
      }
    ]
  },
  {
    id: 4,
    title: "pancake and orange marmalade",
    mealSlot: "breakfast", // {key: label, value: Moment/Date} default: now -> Date.now
    start: new Date(
      moment("2019-10-21")
        .hour(7)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment("2019-10-21")
        .hour(7)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    // start: new Date(
    //   moment()
    //     .subtract(1, "day")
    //     .hour(7)
    //     .minutes(30)
    // ), //? custom-time || Date.now
    // end: new Date(
    //   moment()
    //     .subtract(1, "day")
    //     .hour(7)
    //     .minutes(45)
    // ), //? custom-time || start + 15-mins,
    foodQuery: "2 servings of pancake and orange marmalade", // original query,
    parsedQuery: "pancake and orange marmalade", // parsed query,
    analysis: [
      {
        food: "pancake",
        unit: "serving",
        quantity: 2,
        image: null,
        nutrition: {
          ENERC_KCAL: {
            label: "Energy",
            amount: 520,
            unit: "kcal",
            percentOfDailyNeeds: 0.19
          },
          PROCNT: {
            label: "Protien",
            amount: 8.3,
            unit: "g",
            percentOfDailyNeeds: 21
          },
          CHOCDF: {
            label: "Carbs",
            amount: 90.9,
            unit: "g",
            percentOfDailyNeeds: 30
          },
          FAT: {
            label: "Fat",
            amount: 14,
            unit: "g",
            percentOfDailyNeeds: 22
          },
          SUGAR: {
            label: "Sugar",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          },
          FIBTG: {
            label: "Fiber",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          }
        },
        caloricBreakdown: {
          percentProtein: 24,
          percentFat: 28,
          percentCarbs: 48
        }
      },
      {
        food: "orange marmalade",
        unit: "serving",
        quantity: 2,
        image: "orange-marmalade.jpg",
        nutrition: {
          ENERC_KCAL: {
            label: "Energy",
            amount: 4.92,
            unit: "kcal",
            percentOfDailyNeeds: 0.25
          },
          PROCNT: {
            label: "Protien",
            amount: 0.01,
            unit: "g",
            percentOfDailyNeeds: 0.01
          },
          CHOCDF: {
            label: "Carbs",
            amount: 1.33,
            unit: "g",
            percentOfDailyNeeds: 0.44
          },
          FAT: {
            label: "Fat",
            amount: 0,
            unit: "g",
            percentOfDailyNeeds: 0
          },
          SUGAR: {
            label: "Sugar",
            amount: 6.42,
            unit: "g",
            percentOfDailyNeeds: 7.13
          },
          FIBTG: {
            label: "Fiber",
            amount: 0.3,
            unit: "g",
            percentOfDailyNeeds: 0.01
          }
        },
        caloricBreakdown: {
          percentProtein: 0.45,
          percentFat: 0.0,
          percentCarbs: 99.55
        }
      }
    ]
  }
];

// export default entries;

export const oldEntries = [
  {
    id: 1,
    title: "Some Event",
    start: new Date(2019, 3, 9, 0, 0, 0),
    end: new Date(2019, 3, 10, 0, 0, 0)
  },
  {
    id: 2,
    title: "Lunch",
    start: new Date(
      moment()
        .hour(12)
        .minutes(20)
    ),
    end: new Date(
      moment()
        .hour(12)
        .minutes(35)
    ),
    desc: "Power lunch"
  },
  {
    id: 3,
    title: "Happy Hour",
    start: new Date(2019, 3, 12, 21, 0, 0, 0),
    end: new Date(2019, 3, 12, 21, 30, 0, 0),
    desc: "Most important meal of the day"
  },
  {
    id: 4,
    title: "Dinner",
    start: new Date(
      moment()
        .subtract(1, "day")
        .hour(20)
        .minutes(30)
    ),
    end: new Date(
      moment()
        .subtract(1, "day")
        .hour(20)
        .minutes(50)
    )
  },
  {
    id: 5,
    title: "Birthday Party",
    start: new Date(2019, 3, 13, 7, 0, 0),
    end: new Date(2019, 3, 13, 10, 30, 0)
  },
  {
    id: 6,
    title: "Late Night Event",
    start: new Date(2019, 3, 21, 19, 30, 0),
    end: new Date(2019, 3, 22, 2, 0, 0)
  },
  {
    id: 7,
    title: "Late Same Night Event",
    start: new Date(2019, 3, 21, 19, 30, 0),
    end: new Date(2019, 3, 21, 23, 30, 0)
  },
  {
    id: 8,
    title: "Multi-day Event",
    start: new Date(2019, 3, 20, 19, 30, 0),
    end: new Date(2019, 3, 22, 2, 0, 0)
  },
  {
    id: 9,
    title: "Today's Analysis Time",
    start: new Date(new Date().setHours(new Date().getHours() - 1)),
    end: new Date(new Date().setHours(new Date().getHours() + 1))
  },
  {
    id: 10,
    title: "Point in Time Event",
    start: now,
    end: now
  }
];
