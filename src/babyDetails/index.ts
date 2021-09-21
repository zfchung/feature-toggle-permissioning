import {createToggleRouter} from "../featureService/toggleRouter";
import {createFeatureService} from "../featureService/featureService";
import {getFeaturesByUserPermission} from "../featureService/toggleByUser";
const featureConfig = getFeaturesByUserPermission();
const features = createToggleRouter(featureConfig);
const featureService = createFeatureService(features);

export function inputBabyDetailsOf(babyName: string) {
    if (featureService.includeWeightInBabyDetails()){
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
