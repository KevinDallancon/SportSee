import { useEffect, useState } from "react";
import apple from '../../assets/apple.svg';
import cheeseburger from '../../assets/cheeseburger.svg';
import chicken from '../../assets/chicken.svg';
import energy from '../../assets/energy.svg';
import { getNutrition } from '../../services/apiServices';
import NutritionCard from '../nutritioncards/nutritioncard';
import './nutritionCards.css';

function NutritionCards({id}) {
  const [userNutrition, setUserNutrition] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Récupération des données pour ID:', id)
        const response = await getNutrition(id);
        setUserNutrition(response.nutritionData);
        console.log('Réponse complète:', response);
        console.log('Données nutritionnelles:', response.nutritionData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données nutritionnelles:', error);
      }
    };

    if (id) {
      fetchData(); 
    }
  }, [id]); 

  console.log('État userNutrition:', userNutrition);

  if (!userNutrition) {
    return <p>Aucune donnée nutrition trouvée pour cet utilisateur.</p>;
  }

  const nutrients = [
    {
      label: "Calories",
      value: userNutrition.calories.value,
      unit: userNutrition.calories.unit,
      icon: energy,
      bgColor: "#FF00001A"
    },
    {
      label: "Proteins",
      value: userNutrition.proteins.value,
      unit: userNutrition.proteins.unit,
      icon: chicken,
      bgColor: "#4AB8FF1A"
    },
    {
      label: "Glucides",
      value: userNutrition.carbs.value,
      unit: userNutrition.carbs.unit,
      icon: apple,
      bgColor: "#F9CE231A"
    },
    {
      label: "Lipides",
      value: userNutrition.lipids.value,
      unit: userNutrition.lipids.unit,
      icon: cheeseburger,
      bgColor: "#FD51811A"
    },
  ];

  return (
    <section className="nutrition-card-bloc">
      {nutrients.map(({ label, value, unit, icon, bgColor }, index) => (
        <div className="nutrition-card" key={index}>
        <NutritionCard label={label} value={value} unit={unit} icon={icon} bgColor={bgColor}/>
        </div>
      ))}
    </section>
  );
}

export default NutritionCards;