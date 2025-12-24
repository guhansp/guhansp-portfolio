import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Snowfall from "react-snowfall";

function Home() {
  const isMobile = window.innerWidth < 900; 
  const snowCount = isMobile ? 50 : 200;
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <Navbar /> */}
      <Navbar />
      <main>
        <Snowfall snowflakeCount={snowCount} />
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
