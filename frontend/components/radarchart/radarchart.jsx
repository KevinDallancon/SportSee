import { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { getPerformance } from '../../services/apiServices';
import './radarchart.css';

const Radarchat = ({id} ) => {

  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPerformance(id);
        console.log("donnée recu dans le composant", response);
        setPerformanceData(response);
        
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  
  if (performanceData.length === 0) return <div>Aucune performance trouvée pour cet utilisateur</div>;

  return (
    <div className="radarchart-container-graph">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" data={performanceData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
            {/* Grille polaire sans lignes radiales */}
            <PolarGrid radialLines={false} />
            {/* Affichage des axes angulaires avec style des ticks */}
            <PolarAngleAxis dataKey="kind" tick={{ fill: "#ffffff", fontSize: 12,fontFamily: "Roboto, sans-serif", fontWeight: 500}} tickSize={10} />
            {/* Graphique radar avec configuration des couleurs */}
            <Radar name="Performance" dataKey="value" fill="#E60000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Radarchat;