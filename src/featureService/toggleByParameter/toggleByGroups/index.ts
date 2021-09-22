const featureConfig = require("../../featureConfig.json")
const userGroupConfig = require("../../../user-group-list.json");

export function getFeatureListByGroups(userId: string) {
    const groupListWithUser = getGroupListWithUser(userId);
    let mergedFeatureListByGroups = {};

    for (let group of groupListWithUser) {
        const featureListByGroup = featureConfig.groups[group];
        Object.assign(mergedFeatureListByGroups, featureListByGroup)
    }

    return mergedFeatureListByGroups;
}

function getGroupListWithUser(userId: string) {
    let list = [];

    for (let group in userGroupConfig) {
        const userList = userGroupConfig[group]
        const isAMemberOfUserList = userList.includes(userId);
        if (isAMemberOfUserList) {
            list.push(group);
        } else continue;
    }
    return list;
}