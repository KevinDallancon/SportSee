import { useParams } from 'react-router-dom';
import Activity from '../../components/activity/activity.jsx';
import Linechart from '../../components/linechart/linechart.jsx';
import Navbar from '../../components/navbar/navbar';
import NutritionCards from '../../components/nutritioncards/nutritioncards.jsx';
import Profil from '../../components/profil/profil.jsx';
import Radarchat from '../../components/radarchart/radarchart.jsx';
import Radialbarchat from '../../components/radialbarchart/radialbarchart.jsx';
import './Home.css';
import Sidebar from '/components/sidebar/sidebar';

const Home = () => {

  const { id } = useParams(); // Récupérez l'id depuis les paramètres de l'URL
  console.log(id);
  
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <section className='section-home'>
          <div className='home-header'>
            <Profil id={id}/>
          </div>
          <div className='home-main'>
            <div className='home-left'>
              <Activity id={id} />
              <div className='home-charts'>
              <Linechart id={id} />
              <Radarchat id={id} />
              <Radialbarchat id={id} />
              </div>
            </div>
            <div className='home-right'>
              <NutritionCards id={id}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;