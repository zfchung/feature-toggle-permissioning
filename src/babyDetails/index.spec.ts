// import { inputBabyDetailsOf } from "./index";
// import {createToggleRouter} from "../featureService/toggleRouter";
// import {getFeaturesByUserPermission} from "../featureService/toggleByParameter";
// const featureConfig = getFeaturesByUserPermission();
// const babyList = require("../baby-data.json");
//
// describe("Test inputBabyDetailsFrom function", () => {
//   let toggleRouter: any;
//
//   beforeEach(function() {
//     toggleRouter = createToggleRouter(featureConfig);
//   })
//
//   it("should works correctly with old algorithm", () => {
//     // Given
//     toggleRouter.setFeature("include-baby-weight", false);
//     // When
//     const babyAnatasia = babyList.Anatasia
//     const result = inputBabyDetailsOf(babyAnatasia);
//     const expectedResult = ["female"];
//     // Then
//     expect(result).toEqual(expectedResult);
//   });
//
//   it("should works correctly with new algorithm", () => {
//     // Given
//     toggleRouter.setFeature("include-baby-weight", true);
//     // When
//     const babyAnatasia = babyList.Anatasia
//     const result = inputBabyDetailsOf(babyAnatasia);
//     const expectedResult = ["female", 3.4];
//     // Then
//     expect(result).toEqual(expectedResult);
//   });
//
//
// });
