import { includeBabyDetailsOf } from "./index";
import {createToggleRouter} from "./toggleRouter";
const featureConfig = require("./config.json");
const babyList = require("./baby-data.json");

describe("Test inputBabyDetailsFrom function", () => {
  let toggleRouter: any;

  beforeEach(function() {
    toggleRouter = createToggleRouter(featureConfig);
  })

  it("should works correctly with old algorithm", () => {
    // Given
    toggleRouter.setFeature("include-baby-weight", false);
    // When
    const babyName = babyList
    const result = includeBabyDetailsOf(babyName.Anatasia);
    const expectedResult = "female";
    // Then
    expect(result).toEqual(expectedResult);
  });


});
