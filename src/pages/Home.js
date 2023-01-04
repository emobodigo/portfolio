import Contact from "../components/Contact";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ResumeSection from "../components/ResumeSection";
import Service from "../components/Service";
import WorkSection from "../components/WorkSection";

const Home = () => {

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Service />
            <ExperienceSection />
            <WorkSection />
            <ResumeSection />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
