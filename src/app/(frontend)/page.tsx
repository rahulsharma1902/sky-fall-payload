import Aboutus from "./components/pages/home/Aboutus";
import WorldModel from "./components/pages/technology/WorldModel";
import TechBg from "./components/pages/technology/TechBg";
import TechDescription from "./components/pages/technology/TechDescription";
import HeroSection from  "./components/pages/home/HeroSection";
import AutonomousSupport from "./components/pages/home/AutonomousSupport";
import EnterpriseITHero from "./components/pages/home/EnterpriseITHero";
import FeatureSection from "./components/pages/home/FeaturesHome";
import WaitlistSection from "./components/pages/home/WaitlistSection"

export default function Home() {
  return (
    <section>
      {/* <TechBg />
      <WorldModel />
      <TechDescription />
      <Aboutus /> */}
      <HeroSection />
      <AutonomousSupport />
      <EnterpriseITHero />
      <FeatureSection />
      <WaitlistSection />

    </section>
  );
}
