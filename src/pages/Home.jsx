import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";  

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <Navbar /> */}
      <Navbar />
      <main>
        <Profile />
        <About />
        <Skills />
        <Experience/> 
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
