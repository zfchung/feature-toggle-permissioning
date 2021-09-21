import {inputBabyDetailsOf} from "./babyDetails";
const babyNameList = require("./baby-data.json");

const babyAnatasia = babyNameList.Anatasia;
const result = inputBabyDetailsOf(babyAnatasia);

console.log(result);