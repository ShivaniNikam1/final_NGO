import Header from "../components/Header";
import Volspeak from "../components/Volspeak";
import Impact from "../components/Impact";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Navbar from "../components/Navbar";

const Home = ({user}) => {
  return (
    <>
      <Navbar user={user}/>
      <Header />
      <Events />
      <Volspeak />
      <Impact />
      <Footer />
    </>
  );
};

export default Home;
