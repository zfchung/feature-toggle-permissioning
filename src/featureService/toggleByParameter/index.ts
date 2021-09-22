const featureConfig = require("../featureConfig.json");
const USER_ID_SESSION = "randomUser"; // userid of person logged in

export function getFeatureList(){
    return featureConfig.defaults;
}