export function createFeatureService(features: any){
    return {
        includeWeightInBabyDetails(){
            // check for user permissions
            return features.isEnabled("include-baby-weight");
        }
    }
}