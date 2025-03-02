//import { Link, NavLink } from 'react-router-dom';
import bike from '../../assets/iconeSidebar/iconBike.png';
import haltere from '../../assets/iconeSidebar/iconHaltere.png';
import swiming from '../../assets/iconeSidebar/iconSwiming.png';
import zen from '../../assets/iconeSidebar/iconZen.png';
import './sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className='sidebar-icons'>
      <div className='sidebar-container'>
        <a href="/"><img src={zen} alt="" /></a>
      </div>
      <div className='sidebar-container'>
        <a href="/"><img src={swiming} alt="" /></a>
      </div>
      <div className='sidebar-container'>
        <a href="/"><img src={bike} alt="" /></a>
      </div>
      <div className='sidebar-container'>
        <a href="/"><img src={haltere} alt="" /></a>
      </div>
      </div>

      <p className="copyright">Copyright, SportSee 2020</p>
    </nav>
  );
};

export default Sidebar;