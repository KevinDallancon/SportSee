import "./profil.css";
import { getUserInfo } from "../../services/apiServices";
import { useEffect, useState } from "react";

const Profil = ({ id }) => {
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserInfo(id);
        setUserData(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  if (!userData) return <div>Pas de données trouvées pour cet utilisateur</div>;

  return (
    <div>
      <h1>Bonjour <span className="firstName">{userData.firstName}</span> </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
)}

export default Profil;