export function createFeatureDecisions(features: any){
    return {
        includeWeightInBabyDetails(){
            return features.isEnabled("include-baby-weight");
        }
    }
}