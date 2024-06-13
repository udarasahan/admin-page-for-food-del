import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'><p className='logo'>PepperPlace.</p></Link>
        <img className='profile' src={assets.profileImage} alt="" />
    </div>
  )
}

export default Navbar