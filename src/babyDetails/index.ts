import {createToggleRouter} from "../toggleRouter";
import {createFeatureDecisions} from "../featureDecision";
const featureConfig = require("../config.json");

const features = createToggleRouter(featureConfig);
const featureDecisions = createFeatureDecisions(features);

export function inputBabyDetailsOf(babyName: string) {
    if (featureDecisions.includeWeightInBabyDetails()){
        return newInputBabyDetailsOf(babyName);
    } else {
        return oldInputBabyDetailsOf(babyName);
    }
}

function newInputBabyDetailsOf(babyName: any){
    const gender = babyName.gender;
    const weight = babyName.weight;
    const babyDetails = [gender, weight];
    return babyDetails;
}

function oldInputBabyDetailsOf(babyName: any){
    const gender = babyName.gender;
    const babyDetails = [gender];
    return babyDetails;
}
