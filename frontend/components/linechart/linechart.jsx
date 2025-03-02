import { useEffect, useState } from "react";
import { Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getAverageSessions } from "../../services/apiServices";
import './linechart.css';

/* Custom Tooltip bloc durée des sessions */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p className="tooltipText">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/* Custom Cursor partie sombre au hover */
const CustomCursor = ({ points, width, height }) => {
  const { x, y } = points[0]; // Prend la position `x` de la souris
  return (
    <Rectangle
      fill="#000000"
      x={x}
      opacity={0.1}
      y={y}
      width={width}
      height={height * 100}
    />
  );
};


const Linechart = ({id} ) => {

  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAverageSessions(id);
        console.log("donnée recu dans le composant", response);
        setSessionData(response.sessions);
        
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  if (sessionData.length === 0) {return  <div>Aucune session trouvée pour cet utilisateur</div>;}

  console.log('Données session:', sessionData);
  

  return (
      <div className="linechart-container">
        <div className="linechart-title">
        <h2>Durée moyenne des sessions</h2>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sessionData} margin={{ top: 0, bottom: 10 }}>
              {/* Dégradé linéaire du graphique */}
              <defs>
                <linearGradient id="gradient">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.45} />
                  <stop offset="60%" stopColor="#ffffff" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#ffffff"
              tickFormatter={(day) =>
                ["L", "M", "M", "J", "V", "S", "D"][day - 1]
              }
              tick={{ dy: 10 }}
              padding={{ left: 0, right: 0 }}
              interval="preserveStartEnd"
              style={{
                fontSize: "12px",
                opacity: "0.66",
                fill: "#ffffff",
              }} />
              <YAxis 
              axisLine={false}
              tickLine={false}
              hide={true}
              domain={['dataMin -15', 'dataMax +20']} // Utilise exactement les valeurs min et max
              />
              <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
              <Line stroke="url(#gradient)" type="monotone" dataKey="sessionLength" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
}

export default Linechart;