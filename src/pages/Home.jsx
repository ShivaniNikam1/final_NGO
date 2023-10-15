import Header from "../components/Header";
import Volspeak from "../components/Volspeak";
import Impact from "../components/Impact";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
import { useLocation } from 'react-router-dom';


const Home = () => {
  
  return (
    <>
    
      <Navbar/>
      <Header />
      <Events />
      <Volspeak />
      <Impact />
      <Footer />
    </>
  );
};

export default Home;
