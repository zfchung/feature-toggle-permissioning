import {getFeatureListByGroups} from "./toggleByGroups";
const USER_ID_SESSION = "alpha123";
const featureConfig = require("../featureConfig.json")

export function getFeatureList(userId: string = USER_ID_SESSION) {
    const featureListByDefaults = featureConfig.defaults;
    const featureListByGroups = getFeatureListByGroups(userId);
    const featureList = mergingListOf(featureListByDefaults, featureListByGroups);
    return featureList;
};

function mergingListOf(featureListByDefaults: {}, featureListByGroups: {}) {
    return Object.assign(featureListByDefaults, featureListByGroups);
}

;

