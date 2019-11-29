// import {view, compose} from "ramda";
const R = require("ramda");

const updateObject = (oldObject, updateVal, ...updateKeyPath) => {
  const lensPath = R.lensPath(updateKeyPath);
  return R.set(lensPath, updateVal, oldObject);
};

let f = "f",
  f0 = "f0",
  f1 = "f1",
  f2 = "f2",
  f3 = "f3";

let obj = {
  a: {
    b: {
      c: {
        d: {
          e: f,
          e1: []
        }
      }
    }
  },
  a2: {
    e2: []
  }
};

// obj, g, e;

let obj2 = {
  c0: {
    d2: {
      e2: f2
    }
  },
  c1: {
    d0: {
      e0: f0
    },
    d: {
      e: f
    },
    d1: {
      e1: []
    }
  },
  c2: {
    d3: {
      e3: []
    }
  }
};

const cLens = R.lensProp("c1");
const dLens = R.lensProp("d");
const lens0 = R.lensIndex(0);
const eLens = R.lensProp("e");

const c = R.view(cLens, obj2);

const obj2_RuledBy_G = R.set(cLens, { g0: "g", g: "g", g1: "g" }, obj2);
// console.log("obj2_RuledBy_G");
// console.log(obj2_RuledBy_G);

const mapG_To_D = obj => {
  let newObj = {};
  const keys = Object.keys(obj);
  keys.forEach(key => {
    let newKey = "d" + key.split("g")[1];
    newObj[newKey] = { [key]: obj[key] };
    // console.log(newKey, newObj[newKey]);
  });
  return newObj;
};
const obj2_ReclaimedBy_D = R.over(cLens, mapG_To_D, obj2_RuledBy_G);
// console.log("obj2_ReclaimedBy_D");
// console.log(obj2_ReclaimedBy_D);

const lensStackForE = R.compose(cLens, dLens, eLens);
// console.log("lensStackForE", "set");
const setLensStack = R.set(lensStackForE, "g", obj2);
// console.log(setLensStack);

const lensPathForE = R.lensPath(["c0", "d2", "e2"]);
// console.log("lensPathForE", "set");
// console.log(R.set(lensPathForE, "g2", obj2));

// console.log(obj2);
// console.log(updateObject(obj2, "g2", "c0", "d2", "e2"));
// console.log(updateObject(obj2, "g", "c1", "d", "e"));

const updateObjAddToArr = (oldObject, updateVal, ...updateArrPath) => {
  const lensPath = R.lensPath(updateArrPath);
  const oldArr = R.view(lensPath, oldObject);
  const newArr = R.append(updateVal, oldArr);
  const updatedObj = R.set(lensPath, newArr, oldObject);
  return updatedObj;
};

// console.log(updateObjAddToArr(obj2, "gArr", "c2", "d3", "e3"));
// console.log(updateObjAddToArr(obj, "gArr", "a2", "e2"));

// console.log(
//   R.equals(
//     {
//       cuisine: "",
//       diet: "vegetarian",
//       excludeIngredients: "garlic",
//       intolerances: ""
//     },
//     {
//       cuisine: "",
//       diet: "vegetarian",
//       excludeIngredients: "garlic,onion",
//       intolerances: ""
//     }
//   )
// );
