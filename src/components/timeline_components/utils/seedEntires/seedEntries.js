import moment from "moment";
import { createEntry, createMealPlan } from "./trackerCalculations";
import * as nutritionAnalysis from "./analysisResData";
import * as recipeDetails from "./recipesDetailData";

export const dietEntries_0 = [
  {
    ...createEntry(nutritionAnalysis.resData_01),
    start: new Date(
      moment()
        .subtract(3, "day")
        .hour(12)
        .minutes(20)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(3, "day")
        .hour(12)
        .minutes(35)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_02),
    start: new Date(
      moment()
        .subtract(3, "day")
        .hour(16)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(3, "day")
        .hour(16)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_03),
    start: new Date(
      moment()
        .subtract(4, "day")
        .hour(20)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(4, "day")
        .hour(20)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_04),
    start: new Date(
      moment()
        .subtract(4, "day")
        .hour(7)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(4, "day")
        .hour(7)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  }
];

export const dietEntries = [
  {
    ...createEntry(nutritionAnalysis.resData_01),
    start: new Date(
      moment()
        .hour(12)
        .minutes(20)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .hour(12)
        .minutes(35)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_02),
    start: new Date(
      moment()
        .hour(16)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .hour(16)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_03),
    start: new Date(
      moment()
        .subtract(1, "day")
        .hour(20)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(1, "day")
        .hour(20)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_04),
    start: new Date(
      moment()
        .subtract(1, "day")
        .hour(7)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(1, "day")
        .hour(7)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  }
];

export const dietEntries_2 = [
  {
    ...createEntry(nutritionAnalysis.resData_01),
    start: new Date(
      moment()
        .subtract(2, "day")
        .hour(11)
        .minutes(45)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(2, "day")
        .hour(12)
        .minutes(0)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_02),
    start: new Date(
      moment()
        .subtract(2, "day")
        .hour(16)
        .minutes(0)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(2, "day")
        .hour(16)
        .minutes(20)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_03),
    start: new Date(
      moment()
        .subtract(2, "day")
        .hour(19)
        .minutes(45)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(2, "day")
        .hour(20)
        .minutes(0)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createEntry(nutritionAnalysis.resData_04),
    start: new Date(
      moment()
        .subtract(2, "day")
        .hour(7)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(2, "day")
        .hour(7)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  }
];

export const mealPlans_0 = [
  {
    ...createMealPlan(recipeDetails.recipeData_01),
    start: new Date(
      moment()
        .subtract(1, "day")
        .hour(7)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(1, "day")
        .hour(7)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_02),
    start: new Date(
      moment()
        .subtract(2, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(2, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_03),
    start: new Date(
      moment()
        .subtract(2, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(2, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_04),
    start: new Date(
      moment()
        .subtract(2, "day")
        .hour(20)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(2, "day")
        .hour(20)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_05),
    start: new Date(
      moment()
        .subtract(3, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(3, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_06),
    start: new Date(
      moment()
        .subtract(3, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(3, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_07),
    start: new Date(
      moment()
        .subtract(4, "day")
        .hour(17)
        .minutes(20)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(4, "day")
        .hour(17)
        .minutes(35)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_08),
    start: new Date(
      moment()
        .subtract(4, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(4, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_09),
    start: new Date(
      moment()
        .subtract(5, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(5, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_10),
    start: new Date(
      moment()
        .subtract(5, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .subtract(5, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  }
];

export const mealPlans = [
  {
    ...createMealPlan(recipeDetails.recipeData_01),
    start: new Date(
      moment()
        .add(1, "day")
        .hour(7)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(1, "day")
        .hour(7)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_02),
    start: new Date(
      moment()
        .add(2, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(2, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_03),
    start: new Date(
      moment()
        .add(2, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(2, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_04),
    start: new Date(
      moment()
        .add(2, "day")
        .hour(20)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(2, "day")
        .hour(20)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_05),
    start: new Date(
      moment()
        .add(3, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(3, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_06),
    start: new Date(
      moment()
        .add(3, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(3, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_07),
    start: new Date(
      moment()
        .add(4, "day")
        .hour(17)
        .minutes(20)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(4, "day")
        .hour(17)
        .minutes(35)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_08),
    start: new Date(
      moment()
        .add(4, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(4, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_09),
    start: new Date(
      moment()
        .add(5, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(5, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_10),
    start: new Date(
      moment()
        .add(5, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(5, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  }
];

export const mealPlans_2 = [
  {
    ...createMealPlan(recipeDetails.recipeData_01),
    start: new Date(
      moment()
        .add(6, "day")
        .hour(7)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(6, "day")
        .hour(7)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_02),
    start: new Date(
      moment()
        .add(6, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(6, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_03),
    start: new Date(
      moment()
        .add(6, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(6, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_04),
    start: new Date(
      moment()
        .add(6, "day")
        .hour(20)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(6, "day")
        .hour(20)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_05),
    start: new Date(
      moment()
        .add(8, "day")
        .hour(12)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(8, "day")
        .hour(12)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_06),
    start: new Date(
      moment()
        .add(8, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(8, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_07),
    start: new Date(
      moment()
        .add(8, "day")
        .hour(17)
        .minutes(20)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(8, "day")
        .hour(17)
        .minutes(35)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_08),
    start: new Date(
      moment()
        .add(5, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(5, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_09),
    start: new Date(
      moment()
        .add(8, "day")
        .hour(13)
        .minutes(0)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(8, "day")
        .hour(13)
        .minutes(15)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  },
  {
    ...createMealPlan(recipeDetails.recipeData_10),
    start: new Date(
      moment()
        .add(7, "day")
        .hour(8)
        .minutes(30)
    ), //? custom-time || Date.now
    end: new Date(
      moment()
        .add(7, "day")
        .hour(8)
        .minutes(45)
    ), //? custom-time || start + 15-mins,
    mealSlot: "now"
  }
];
