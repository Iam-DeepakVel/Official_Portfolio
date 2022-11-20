import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
    { loading?
    <div className="flex items-center justify-center text-center h-screen bg-gradient-to-b from-black via-black to-gray-800 from w-full">
      <HashLoader
        color={'white'}
        loading={loading}
        size={150}
      />
    </div>
      :
      <>
      <Navbar />
      <Home />
      <About />
      <Portfolio/>
      <Skills/>
      <Experience/>
      <Contact/>
      <SocialLinks />
      </>
     }
    </div>
  );
}

export default App;
