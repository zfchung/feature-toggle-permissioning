import {getFeatureList} from "./index";

describe("test getFeatureList function", () => {
    it("should return default list when user is not in user group or user list", () => {
        // Given user is not in user group or user list
        const userId = "anyone"
        const expectedResult = {
            "include-baby-weight": false,
            "include-baby-dateOfBirth": false,
            "include-baby-nationality": false
        };
        // When
        // Then
        expect(getFeatureList(userId)).toEqual(expectedResult);
    });

    it("should return default list with groups list overriding", () => {
        // Given user is in a user group
        // And user group has overriding config
        const userId = "alpha123"
        const expectedResult = {
            "include-baby-weight": true,
            "include-baby-dateOfBirth": false,
            "include-baby-nationality": false
        };
        // When
        // Then
        expect(getFeatureList(userId)).toEqual(expectedResult);
    })

    it("should return with user list overriding default and group list", () => {
        // Given user has individual config
        const userId = "zchung1"
        const expectedResult = {
            "include-baby-weight": true,
            "include-baby-dateOfBirth": false,
            "include-baby-nationality": true
        };
        // When
        // Then
        expect(getFeatureList(userId)).toEqual(expectedResult);
    })

    // edge cases, user is in more than one group and there is conflict in user group config
    // check what happens when there is an unknown groupName in featureConfig
})