import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getActivity } from "../../services/apiServices";
import './activity.css';

const TooltipStyle = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipStyle">
        <p className="tooltipStyle-label">{`${payload[0].value}kg`}</p>
        <p className="tooltipStyle-label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};




const Activity = ({id}) => {
const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getActivity(id);
        setActivityData(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  if (!activityData) return <div>Aucune activité quotidienne trouvé pour cet utilisateur</div>;

  console.log('Données activité:', activityData);

  return (
    <div className="activity-container">
      <h2 className="activity-title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={activityData}
        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}
        barSize={10}
        barGap={8}
        width={800}
        height={250}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* Axe X pour les jours de la semaine */}
        <XAxis dataKey="day" tickFormatter={(value ,index) => index + 1} tick={{ fill: "#9B9EAC" }} tickLine={false} dy={6}   />
        {/* Axe Y pour le poids*/}
        <YAxis
        yAxisId="Poids"
        orientation='right'
        tickLine={false}
        dx={18}
        tick={{ fill: '#9B9EAC' }}
        domain={["dataMin -1", "dataMax +2"]}
        />
        {/* Axe Y pour les calories*/}
        <YAxis
        yAxisId="Calories"
        orientation='left'
        hide={true}
        />
        <Tooltip content={<TooltipStyle />} />
        <Legend 
          iconType="circle"
          iconSize={8}
          align="right"
          verticalAlign="top"
          height={50}
          wrapperStyle={{
            top: -20,
            right: 10
          }}
          formatter={(value) => {
            // Ajout d'un span avec style personnalisé
            return <span style={{ color: '#74798C' }}>
              {value === 'kilogram' ? 'Poids (kg)' : 'Calories (kCal)'}
            </span>
          }}
        />
        <Bar dataKey="kilogram" yAxisId="Poids" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
        <Bar dataKey="calories" yAxisId="Calories" fill="#ff0101" barSize={7} radius={[3, 3, 0, 0]} />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;