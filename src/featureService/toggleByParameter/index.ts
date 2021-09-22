import {getFeatureListByGroups} from "./toggleByGroups";
import {getFeatureListByUser} from "./toggleByUsers";
const USER_ID_SESSION = "alpha123";
const featureConfig = require("../featureConfig.json")

export function getFeatureList(userId: string = USER_ID_SESSION) {
    const featureListByDefaults = featureConfig.defaults;
    const featureListByGroups = getFeatureListByGroups(userId);
    const featureListByUser = getFeatureListByUser(userId);
    const featureList = mergingListOf(featureListByDefaults, featureListByGroups, featureListByUser);
    return featureList;
};

function mergingListOf(target: {}, ...sources: {}[]) {
    return Object.assign(target, ...sources);
}

;

