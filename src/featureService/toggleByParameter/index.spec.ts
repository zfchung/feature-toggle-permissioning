import {getFeatureList} from "./index";

const featureConfig = require("../../../__mock__/featureConfig.json");


describe("test getFeatureList function", () => {
    it("should return default list when user is not in user group or user list", () => {
        // Given user is not in user group or user list
        const userId = "anyone"
        // When
        // Then
        const expectedResult = {
            "include-baby-weight": false,
            "include-baby-dateOfBirth": false,
            "include-baby-nationality": false
        };
        expect(getFeatureList(userId)).toEqual(expectedResult);
    });

    it("should return default list with groups list overriding", () => {
        // Given user is in a user group
        const userId = "alpha123"
        // And user group has overriding config
        // When
        // Then
        const expectedResult = {
            "include-baby-weight": true,
            "include-baby-dateOfBirth": false,
            "include-baby-nationality": false
        };
        expect(getFeatureList(userId)).toEqual(expectedResult);
    })


    // edge cases, user is in more than one group and there is conflict in user group config
    // check what happens when there is an unknown groupName in featureConfig
})