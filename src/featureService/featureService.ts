export function createFeatureService(features: any){
    return {
        includeWeightInBabyDetails(){
            return features.isEnabled("include-baby-weight");
        }
    }
}