export function createFeatureDecisions(features: any){
    return {
        includeWeightInBabyDetails(){
            // check for user permissions
            return features.isEnabled("include-baby-weight");
        }
    }
}