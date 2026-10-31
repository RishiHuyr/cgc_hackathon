import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkflowSection from "@/components/WorkflowSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#07080A]">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <TeamSection />
      </main>
    </div>
  );
};

export default Index;
