// Fonction qui formate les données de performance utilisateur
export const PerformanceModel = (data) => {
  // Définir l'ordre d'affichage souhaité
  const sortOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];
  
  // Définir les traductions pour chaque type de performance
  const kindTranslations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };
  
  // Vérifier si les données et leur structure sont valides
  if (!data || !data.data || !data.kind) {
    return [];
  }
  
  // Transformer les données avec les traductions
  const formattedData = data.data.map(item => ({
    value: item.value || 0,
    kind: kindTranslations[data.kind[item.kind]] || data.kind[item.kind],
    name: kindTranslations[data.kind[item.kind]] || 
          (data.kind[item.kind].charAt(0).toUpperCase() + data.kind[item.kind].slice(1))
  }));
  
  // Trier les données selon l'ordre défini
  formattedData.sort((a, b) => 
    sortOrder.indexOf(a.kind) - sortOrder.indexOf(b.kind)
  );
  
  return formattedData;
};