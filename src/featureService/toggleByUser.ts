const featureConfig = require("./featureConfig.json");
const USER_ID_SESSION = "randomUser"; // userid of person logged in

function getUserAllowedFeatures(userID: string): string[] {
    return featureConfig.userList[userID];
}

const featureOpenForUser = getUserAllowedFeatures(USER_ID_SESSION);
const featureList: object = featureConfig.featureList;



const filtered = Object.fromEntries(
    Object.entries(featureList).filter(
        ([key, val])=>featureOpenForUser.includes(key)
    )
);

export function getFeaturesByUserPermission(){
    return filtered;
}