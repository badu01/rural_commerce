import backgroundImage from '../assets/images/mainBG.png';
import { Link } from 'react-router-dom';
import RoundButton from '../components/RoundButton';

function Home() {
  return (
    <div>
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay for Tint Effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 p-8 max-w-5xl  text-left text-white">
          <h2 className="md:text-5xl font-bold mb-4 text-center">
            Welcome to the Unified Urban <br/>E-Commerce Platform
          </h2>
          <p className="md:text-lg mb-6 text-center">
            Connecting rural commerce with broader markets.
          </p>
          <Link to="/products">
            {
              <RoundButton title="Shop Now"/>
            }
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
