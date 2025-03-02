import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer
} from "recharts";
import { getUserInfo } from "../../services/apiServices";
import './radialbarchart.css';

const Radialbarchat = ({ id } ) => {
  const [userData, setUserData] = useState([]); // stock les datas
  // On récupére les données score au chargement ou quand l'id change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserInfo(id); // call API to recover les datas
        console.log("Données brutes reçues :", data);
        // On formate et met à jour le state avec les données du score
        setUserData([{ name: "Score", value: (data?.score || 0) * 100 }]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    if (id) {
      fetchData(); // recover datas if id present
    }
  }, [id]); // If "id" change relance l'éxécution

  // Vérification des données
  if (userData.length === 0) {
    return <p>Aucune donnée score trouvée pour cet utilisateur.</p>;
  }

  

  return (
    <div className="radialbarchat-container-graph">
      <h2>Score</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={userData}
            cx="50%"
            cy="50%"
            barSize={10}
            innerRadius={80}
            outerRadius={110}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar 
              dataKey="value" 
              cornerRadius={10} 
              fill="#E60000"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        
        {/* Légende au centre affichée en dehors du chart */}
        <div className="legendScore">
          <div className="score">{userData[0].value}%</div>
          <div className="detail">de votre objectif</div>
        </div>
      </div>
    </div>
  );
};

export default Radialbarchat;