export const ScoreModel = (data) => {
  // vérifie si 'score' existe, sinon 'todayscore', sinon 0 par default
  return {
    score: data.score || data.todayScore || 0,
  };
};