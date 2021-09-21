export function createToggleRouter(featureConfig: any){
    return {
        setFeature(featureName: string, isEnabled: boolean){
            featureConfig[featureName]= isEnabled;
        },
        isEnabled(featureName: string){
            return featureConfig[featureName];
        }
    }
}