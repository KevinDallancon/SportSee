
// Fonction pour formater les données de session utilisateur
export const ActivityModel = (data) => {
  // On vérifie si les data des sessions sont présent selon la res API
  if (data.sessions) {
    // MAPPE chaque session pr récup seulement les info nécessaires
    return data.sessions.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
  // retourn un tabl vide si aucune donnée session
  return [];
};