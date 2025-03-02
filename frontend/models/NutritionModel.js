export default class NutritionModel {
  constructor(data) {
    // Données nutritionnelles
    this.nutritionData = {
      calories: this.formatNutrition(data?.keyData?.calorieCount, 'kCal'),
      proteins: this.formatNutrition(data?.keyData?.proteinCount, 'g'),
      carbs: this.formatNutrition(data?.keyData?.carbohydrateCount, 'g'),
      lipids: this.formatNutrition(data?.keyData?.lipidCount, 'g')
    };
  }

  formatNutrition(value, unit) {
    return {
      value: value || 0,
      unit
    };
  }
}