// services/apiServices.jsx
import axios from 'axios';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../data/mockData';
import { ActivityModel } from '../models/ActivityModel';
import NutritionModel from '../models/NutritionModel';
import { PerformanceModel } from '../models/PerformanceModel';
import { ScoreModel } from '../models/ScoreModel';
import SessionModel from '../models/SessionModel';
import UserModel from '../models/UserModel';

const BASE_URL = 'http://localhost:3000'; // Ajustez selon votre URL d'API
const USE_MOCK = false; // Active ou désactive les données mockées


export const getUserInfo = async (userId) => {
  let userData;
  try {
    if (USE_MOCK) {
      userData = USER_MAIN_DATA.find(user => user.id == userId);
    } else {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      userData = response.data.data;
    }
    
    if (!userData) {
      throw new Error('Utilisateur non trouvé');
    }
    
    // Application du ScoreModel aux données utilisateur
    const scoreData = ScoreModel(userData);
    
    // Création d'une instance de UserModel avec les données utilisateur
    const userModel = new UserModel(userData);
    
    // Ajout du score calculé à l'instance UserModel
    // Supposons que UserModel a une méthode pour définir le score ou que nous pouvons accéder directement à la propriété
    userModel.score = scoreData.score;
    
    return userModel;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données utilisateur : ${error.message}`);
  }
};

export const getNutrition = async (userId) => {
  let userNutrition;
  
  try {
    if (USE_MOCK) {
      userNutrition = USER_MAIN_DATA.find(user => user.id == userId);
    } else {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      userNutrition = response.data.data;
    }
    
    if (!userNutrition) {
      throw new Error('Utilisateur non trouvé');
    }
    
    return new NutritionModel(userNutrition);
    
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données nutritionnelles: ${error.message}`);
  }
};

export const getActivity = async (userId) => {
  let userActivity;
  
  try {
    if (USE_MOCK) {
      userActivity = USER_ACTIVITY.find(user => user.userId == userId);
    } else {
      const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
      userActivity = response.data.data;
    }
    if (!userActivity) {
      throw new Error('Utilisateur non trouvé');
    }
    return ActivityModel(userActivity); // On retourne directement les données d'activité
  
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données d'activité: ${error.message}`);
  }
};

export const getAverageSessions = async (userId) => {

	let userAverageSession ;
  
  try {
	if (USE_MOCK) {
    userAverageSession = USER_AVERAGE_SESSIONS.find(user => user.userId == userId);
    
    }
	else {
    const response = await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
      userAverageSession = response.data;
    }
	if (!userAverageSession) {
        throw new Error('Utilisateur non trouvé');
    }
	return new SessionModel(userAverageSession);
  
  } catch (error) {
	throw new Error('Erreur lors de la récupération des données de sessions', error);
  }
};

export const getPerformance = async (userId) => {
  let userPerformance;
  try {
    if (USE_MOCK) {
      userPerformance = USER_PERFORMANCE.find(user => user.userId == userId);
    } 
    else {
      const response = await axios.get(`${BASE_URL}/user/${userId}/performance`);
      userPerformance = response.data.data;
    }
    
    if (!userPerformance) {
      throw new Error('Utilisateur non trouvé');
    }
    
    // Utiliser la fonction PerformanceModel
    return PerformanceModel(userPerformance);
    
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur :', error);
    throw new Error('Erreur lors de la récupération des données de performance');
  }
};