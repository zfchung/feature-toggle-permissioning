const featureConfig = require("../../featureConfig.json");

export function getFeatureListByUser(userId: string){
    const userList = Object.keys(featureConfig.users);
    const isFoundInUserList = userList.includes(userId);
    let featureListByUser = {};
    if(isFoundInUserList){
        featureListByUser = featureConfig.users[userId];
    };

    return featureListByUser;
}
