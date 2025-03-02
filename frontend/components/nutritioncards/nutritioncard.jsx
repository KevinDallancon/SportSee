import './nutritionCards.css';

function NutritionCard({ icon, label, value, unit, bgColor }) {


  return (
    <>
      <div className="nutrition-card-icon" style={{ backgroundColor: bgColor }}>
        <img src={icon} alt={label} />
      </div>
      <div className="nutrition-card-details">
        <p className="value">
          {value ? `${value.toLocaleString("fr-FR")}${unit}` : ""}
        </p>
        <p className="label">{label}</p>
      </div>
    </>
  );
}

export default NutritionCard;