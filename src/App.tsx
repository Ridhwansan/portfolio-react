import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Expertise />
      <Aboutme />
      <Portfolio />
      <Contactme />
      <Footer />
    </>
  );
};

export default App;
