import {getFeatureList} from "./index";

const featureConfig = require("../../../__mock__/featureConfig.json");


describe("test xx function", () => {
    it("should return default list when user is not in user group or user list", () => {
        // Given user is not in user group or user list
        // When
        // Then
        const expectedResult = {
            "include-baby-weight": false,
            "include-baby-dateOfBirth": false,
            "include-baby-nationality": false
        }
        expect(getFeatureList()).toEqual(expectedResult);
    })
})