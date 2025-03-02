export default class SessionModel {
  constructor(data) {

    // Accéder aux données correctement en tenant compte de la structure
    const sessionData = data.data || data; // Prend data.data si existe, sinon data

    if (!sessionData || !sessionData.sessions) {
      this.sessions = [];
      return;
    }

    this.sessions = sessionData.sessions.map(session => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));

    console.log("Sessions après formatage:", this.sessions);
  }
}